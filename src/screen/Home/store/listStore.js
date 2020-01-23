import React from 'react'
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextComponent,
  AsyncStorage,
  Share,
  
} from 'react-native'
// import ListView from 'react-native-listview'
import { StyleStore, styleAlamat } from '../style'
import { db } from '../../../fireBase/firebase'
let itemRef = db.ref('/dbObat')
let _ = require('lodash')
import Data from './data.json'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
import FA from 'react-native-vector-icons/FontAwesome'
const Logout = <Icons name='logout' size={20} style={{ marginHorizontal: 5 }} />
const ArrowBack = <Icons name='arrow-left' size={20} style={{marginLeft:5}} />
const AddItem = <Icon name='post_add' size={20} />
const exit = <Icon name='close' size={20} style={{ marginRight: 5 }} />
const Add = <Icon name='add' size={18} />
const remove = <Icon name='remove' size={18} />
const save_alt = <Icon name='save' size={18} style={{ marginLeft: 3 }} />

class Store extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: [],
      Pesanan: '1',
      Modal: false,
      jumlah: '0',
      //Modal
      text1: '',
      jumlahPesanan: '',
      harga_product: '',
      //isiPesanan
      nama_product: '',
      jumlah_product: '',
      ProductSiap: [],
      ModalBuy: false,
      jumlahItemBuy: '',
      buttonMp: true,
      buttonMp1: false,
      sendButtonMP: 'account Dana',
      caraaDana: Data,
      onOffLPB: false,
      objectOnOffLPB: [],
      objOnOffLPB: [],
      Alamat: [],
      Admin: '',
      // alamat
      ModalAlamat: false,
      nama: '',
      no_telephone: '',
      alamat: '',
      AlamatSave: [],
      role: false,
      // search
      textSearch: '',
      dataSource:""
    }
    this.arrayholder = []
  }
  componentDidMount () {
    //======= get data ========
    itemRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ Data: items })
      this.arrayholder = items
    })
    AsyncStorage.getItem('Alamat').then(value => {
      if (value != null) {
        this.setState({ Alamat: JSON.parse(value) })
      }
    })
    AsyncStorage.getItem('objectOnOffLPB').then(value => {
      if (value != null) {
        this.setState({ objOnOffLPB: JSON.parse(value) })
      }
    })
  }

  send = () => {
    let { Pesanan } = this.state
    db.ref('/dbPesanan').push({
      nama_product: Pesanan
    })
    this.setState({ textPesan: '' })
    console.log('success')
  }

  JumlahProdak = () => {}

  SaveMemesan = () => {
    let {
      nama_product,
      harga_product,
      Pesanan,
      ProductSiap,
      sendButtonMP
    } = this.state
    let kali = harga_product * Pesanan
    let save = {
      nama_product: nama_product,
      jumlah_Pesanan: Pesanan,
      jumlah_product: kali
    }
    ProductSiap.push(save)
    // alert(JSON.stringify(ProductSiap))
    this.setState({ Modal: false, Pesanan: 1 })
    this.jumlah()
  }

  renderItem = ({ item }) => {
    return (
      <View style={StyleStore.itemComponent}>
        <View style={StyleStore.cardItem}>
          <Image style={StyleStore.itemImage} source={{ uri: item.image }} />
          <Text style={StyleStore.textProduct}>{item.nama_product}</Text>
          <View style={StyleStore.viewKet}>
            <Text style={StyleStore.text}>{item.khasiat}</Text>
            <Text style={StyleStore.text}>
              Rp.{item.harga_product},- / kilo
            </Text>
          </View>
          {this.state.Admin === 'Admin' ? (
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                position: 'absolute',
                alignItems: 'center'
              }}
            >
              <Text style={{ width: '100%', paddingHorizontal: 5 }}>
                jumlah : {item.jumlah_product}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingVertical: 5,
                  width: '100%',
                  backgroundColor: 'green',
                  paddingHorizontal: 10,
                  borderRadius: 5
                }}
              >
                Edit
              </Text>
            </View>
          ) : (
            <Text
              style={StyleStore.textAdd}
              onPress={() =>
                this.setState({
                  Modal: !this.state.Modal,
                  text1: item.nama_product,
                  nama_product: item.nama_product,
                  harga_product: item.harga_product
                })
              }
            >
              Tambah
            </Text>
          )}
        </View>
      </View>
    )
  }

  //dataPesanan
  Modal = () => {
    this.setState({ Modal: !this.state.Modal })
  }
  AddPesanan = () => {
    this.setState({ Pesanan: parseInt(this.state.Pesanan) + 1 })
  }
  DeletePesanan = () => {
    this.setState({ Pesanan: parseInt(this.state.Pesanan) - 1 })
  }

  jumlahItemBuy = () => {
    let data = this.state.ProductSiap
    let jumlah = []
    data.map(value => {
      jumlah.push(parseInt(value.jumlah_product))
    })
    let sum = _.sum(jumlah)
    this.setState({ jumlahItemBuy: sum })
  }
  itemBuy = ({ item }) => {
    return (
      <View style={StyleStore.itemRow}>
        <View style={{ width: '70%' }}>
          <Text>{item.nama_product}</Text>
        </View>
        <View style={{ width: '5%' }}>
          <Text>{item.jumlah_Pesanan}</Text>
        </View>
        <View style={{ width: '25%', alignItems: 'flex-end' }}>
          <Text>Rp.{item.jumlah_product},-</Text>
        </View>
      </View>
    )
  }

  ModalBuy = () => {
    this.jumlahItemBuy()
    this.setState({ ModalBuy: !this.state.ModalBuy })
  }

  onOffBMP = () => {
    this.setState({
      buttonMp: true,
      sendButtonMP: 'account Dana',
      buttonMp1: false
    })
  }
  onOffBMP1 = () => {
    this.setState({
      buttonMp1: true,
      sendButtonMP: 'Gopay',
      buttonMp: false
    })
  }

  buttonMp = () => {
    if (this.state.buttonMp === true) {
      return (
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 10,
            backgroundColor: 'green',
            marginRight: 10,
            borderWidth: 2,
            borderColor: 'green'
          }}
          activeOpacity={0.7}
          onPress={this.onOffBMP}
        ></TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginRight: 10,
            borderWidth: 2,
            borderColor: '#d3d3d3'
          }}
          activeOpacity={0.7}
          onPress={this.onOffBMP}
        ></TouchableOpacity>
      )
    }
  }
  buttonMp1 = () => {
    if (this.state.buttonMp1 === true) {
      return (
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 10,
            backgroundColor: 'green',
            marginRight: 10,
            borderWidth: 2,
            borderColor: 'green'
          }}
          activeOpacity={0.7}
          onPress={this.onOffBMP1}
        ></TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginRight: 10,
            borderWidth: 2,
            borderColor: '#d3d3d3'
          }}
          activeOpacity={0.7}
          onPress={this.onOffBMP1}
        ></TouchableOpacity>
      )
    }
  }

  Alamat = () => {
    this.setState({ ModalBuy: false })
    this.props.navigation.navigate('Alamat')
  }
  onOffLPB = () => {
    this.setState({ onOffLPB: !this.state.onOffLPB, ModalBuy: false })
    let Alamat = this.state.Alamat
    let product = this.state.ProductSiap
    let object = []

    let data = {
      nama: Alamat[0].nama,
      no_telephone: Alamat[0].no_telephone,
      alamat: Alamat[0].alamat,
      sendButtonMP: this.state.sendButtonMP
    }
    object.push(data)
    object.push(product)
    this.state.objectOnOffLPB.push(data)
    this.state.objectOnOffLPB.push(product)
    this.state.objOnOffLPB.push(this.state.objectOnOffLPB)
    // alert(JSON.stringify(object))
    db.ref('/dbPesanan').push(object)
    this.setState({ jumlah: '0' })
  }

  AdminOrNo = () => {
    if (this.state.Admin === 'Admin') {
      return (
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddStore')}
          >
            <Text>Add product</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return <View></View>
    }
  }
  save = () => {
    AsyncStorage.setItem(
      'objectOnOffLPB',
      JSON.stringify(this.state.objOnOffLPB)
    )
    this.setState({ onOffLPB: false })
  }

  saveAlamat = () => {
    let { nama, no_telephone, alamat } = this.state
    let Alamat = []
    let save = {
      nama: nama,
      no_telephone: no_telephone,
      alamat: alamat
    }

    Alamat.push(save)
    // this.state.Alamat.push(save)
    AsyncStorage.setItem('Alamat', JSON.stringify(Alamat))
    this.setState({ ModalAlamat: false, role: true })
  }
  componentDidUpdate () {
    if (this.state.role) {
      setTimeout(() => {
        this.setState({ role: false })
      }, 500)
    }
  }

  jumlah = () => {
    let data = this.state.ProductSiap
    let obj = []
    data.map(value => {
      obj.push(parseInt(value.jumlah_product))
    })
    let sum = _.sum(obj)
    this.setState({ jumlah: sum })
    // alert(sum)
  }

  SearchFilterFunction (text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.nama_product.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      Data:newData ,
      text: text
    })
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000'
        }}
      />
    )
  }
  render () {
    if (this.state.role) {
      AsyncStorage.getItem('Alamat').then(value => {
        if (value != null) {
          this.setState({ Alamat: JSON.parse(value) })
        }
      })
    }
    return (
      <View style={StyleStore.component}>
        <Modal transparent={false} visible={this.state.ModalAlamat}>
          <View style={styleAlamat.component}>
            <View style={styleAlamat.header}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.setState({ModalAlamat:false})}>
              {ArrowBack}<Text>back</Text>
            </TouchableOpacity>
              <TouchableOpacity
                onPress={this.saveAlamat}
                style={{ flexDirection: 'row', paddingVertical: 10 }}
              >
                <Text>SAVE</Text>
                {save_alt}
              </TouchableOpacity>
            </View>
            <Text
              style={{
                width: 100,
                paddingVertical: 5,
                backgroundColor: '#d3d3d3',
                paddingHorizontal: 10,
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 10,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >
              Profile
            </Text>
            <Text style={styleAlamat.Text}>Nama</Text>
            <TextInput
              style={styleAlamat.TextInput}
              placeholder='Nama Lengkap'
              onChangeText={text => this.setState({ nama: text })}
            />
            <Text style={styleAlamat.Text}>No Telephone</Text>
            <TextInput
              style={styleAlamat.TextInput}
              placeholder='+62'
              onChangeText={text => this.setState({ no_telephone: text })}
              keyboardType='number-pad'
            />
            <Text style={styleAlamat.Text}>Alamat</Text>
            <TextInput
              style={styleAlamat.InputAlamat}
              placeholder='alamat'
              onChangeText={text => this.setState({ alamat: text })}
            />
          </View>
        </Modal>

        <Modal transparent={true} visible={this.state.onOffLPB}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: '80%',
                paddingVertical: 10,
                backgroundColor: '#fff',
                elevation: 5,
                borderRadius: 5,
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: 40,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingHorizontal: 15
                }}
              >
                <TouchableOpacity
                  onPress={this.save}
                  style={{ flexDirection: 'row' }}
                >
                  <Text style={{ fontSize: 16 }}>save</Text>
                  {save_alt}
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginBottom: 5,
                  marginTop: 5,
                  textAlign: 'left',
                  marginLeft: 10
                }}
              >
                #jumalah pesanan Yang Anda Harus Bayar
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 10
                }}
              >
                <Text>Rp.{this.state.jumlahItemBuy},-</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginBottom: 5,
                  marginTop: 10
                }}
              >
                #metode Pembayaran ( {this.state.sendButtonMP} )
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text>0895039395009</Text>
              </View>

              <View style={{ width: '90%' }}>
                <Text style={{ marginVertical: 5, fontWeight: 'bold' }}>
                  #cara pembayaran
                </Text>
                <FlatList
                  data={this.state.caraaDana}
                  keyExtractor={(index, item) => index.toString()}
                  renderItem={({ item }) => {
                    return (
                      <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text>{item.no}. </Text>
                        <Text
                          style={{
                            textAlign: 'auto',
                            fontSize: 14,
                            fontStyle: 'italic'
                          }}
                        >
                          {item.langkah}
                        </Text>
                      </View>
                    )
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Modal visible={this.state.ModalBuy}>
          <View
            style={{
              width: '100%',
              height: '100%',
              paddingHorizontal: 5,
              paddingTop: 10
            }}
          >
            <TouchableOpacity
              style={StyleStore.ViewAlamat}
              onPress={() => this.setState({ ModalAlamat: true })}
            >
              {this.state.alamat.nama === '' ? (
                <Text>Alamat</Text>
              ) : (
                <FlatList
                  data={this.state.Alamat}
                  keyExtractor={index => index.toString()}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <Text>Alamat : {item.alamat}</Text>
                      </View>
                    )
                  }}
                />
              )}
            </TouchableOpacity>
            <Text style={StyleStore.TextCKP}>Cek kembali Pesanan</Text>
            <View style={StyleStore.listBuy}>
              <FlatList
                data={this.state.ProductSiap}
                keyExtractor={(index, item) => index.toString()}
                renderItem={this.itemBuy}
              />
            </View>
            <View style={StyleStore.viewJH}>
              <Text>Jumlah</Text>
              <Text>Rp.{this.state.jumlahItemBuy},-</Text>
            </View>

            <Text style={StyleStore.TextCKP}>Methode Pembayaran</Text>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#d3d3d3',
                borderRadius: 10,
                paddingHorizontal: 5
              }}
            >
              <View style={StyleStore.viewBuy}>
                <Text>account Dana</Text>
                {this.buttonMp()}
              </View>
              <View style={StyleStore.viewBuy}>
                <Text>account Gopay</Text>
                {this.buttonMp1()}
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'flex-end',
              position: 'absolute'
            }}
          >
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ ModalBuy: false })}
                style={{
                  width: 45,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row'
                }}
              >
                {Logout}
                <Text style={{ fontSize: 15, fontWeight: '500' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.onOffLPB}
                style={{
                  width: 120,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                  Bayar Sekarang...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal visible={this.state.Modal} transparent={true}>
          <View style={StyleStore.ModalComponent}>
            <View style={StyleStore.cardModal}>
              <Text
                style={{ textAlign: 'right' }}
                onPress={() => this.setState({ Modal: false, Pesanan: 1 })}
              >
                {exit}
              </Text>
              <Text style={StyleStore.text1}>{this.state.text1}</Text>
              <View style={StyleStore.textAddDelete}>
                <View style={StyleStore.TextAddDel}>
                  <Text onPress={this.DeletePesanan}>{remove}</Text>
                </View>
                <View style={StyleStore.TextAddDel1}>
                  <Text>{this.state.Pesanan}</Text>
                </View>
                <View style={StyleStore.TextAddDel}>
                  <Text onPress={this.AddPesanan}>{Add}</Text>
                </View>
              </View>
              <View style={StyleStore.viewSave}>
                <TouchableOpacity
                  style={StyleStore.touchSave}
                  onPress={this.SaveMemesan}
                >
                  <Text>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={StyleStore.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>{ArrowBack}</TouchableOpacity>
          {this.AdminOrNo()}
        </View>
        <View style={{ width: '100%', paddingVertical: 10 }}>
          <TextInput
            style={StyleStore.TextInput}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder='Search Here'
          />
          <View>
            <View>
              <FlatList
                data={this.state.Data}
                numColumns={2}
                renderRow
                keyExtractor={item => item.toString()}
                renderItem={this.renderItem}
              />
            </View>
          </View>
        </View>
        {this.state.Admin === 'Admin' ? (
          <View></View>
        ) : (
          <View style={StyleStore.contentAbsolute}>
            <View style={StyleStore.cardAbsolute}>
              <View style={{ width: 100, flexDirection: 'row' }}>
                <Text
                  style={{
                    paddingRight: 5,
                    marginRight: 5,
                    borderRightWidth: 2,
                    height: '100%'
                  }}
                >
                  Harga
                </Text>
                <Text>Rp.{this.state.jumlah},-</Text>
              </View>
              <TouchableOpacity onPress={this.ModalBuy}>
                <Text>Selanjutnya...</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }
}
export default Store

import React from 'react'
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { styleStore } from '../Home/store/styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Right = <Icon nama="arrow-right" size={30}/>

export default class CekPemesanan extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: [],
      NewData: [],
      onMap: true,
      sendButtonMP: ''
    }
  }
  componentDidMount () {
     AsyncStorage.getItem('objectOnOffLPB').then(value => {
      if (value != null) {
        this.setState({ Data: JSON.parse(value) })
      }
    }) 
  }

  onOffDesc = value => {
    if (this.state.onMap !== value) {
      this.setState({ onMap: value })
    } else if (this.state.onMap === value) {
      this.setState({ onMap: '' })
    }
  }
  render () {
    let data = this.state.Data
    let mapList = data.map(value => {
      if (value != value[0]) {
        return (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity
              style={styleStore.cardValue}
              onPress={() => this.onOffDesc(value)}
            >
              <View
                style={{
                  width: '35%',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text>{value[0].nama}</Text>
                <Text>{value[0].no_telephone}</Text>
              </View>
              <View style={{ width: '65%', marginTop: 3 }}>
                <Text>Alamat</Text>
                <Text style={{ textAlign: 'auto' }}>{value[0].alamat}</Text>
              </View>
              {Right}
            </TouchableOpacity>
            {this.state.onMap === value ? (
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderTopColor: '#fff',
                  paddingBottom: 10,
                  marginBottom:10,
                  elevation:5,
                  backgroundColor:'#fff'
                }}
              >
                <Text>Pesanan</Text>
                {value[1].map(data => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: 2
                      }}
                    >
                      <View style={{ width: '60%' }}>
                        <Text>{data.nama_product}</Text>
                      </View>
                      <View style={{ width: '5%' }}>
                        <Text>{data.jumlah_Pesanan}</Text>
                      </View>
                      <View style={{ width: '35%', alignItems: 'flex-end' }}>
                        <Text>Rp.{data.jumlah_product},-</Text>
                      </View>
                    </View>
                  )
                })}
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    borderTopWidth: 2,
                    marginVertical: 10,
                    paddingVertical: 5,
                    justifyContent: 'space-between'
                  }}
                >
                  <Text>jumlah</Text>
                  <Text>jumlah</Text>
                </View>
                <Text>method Pembayaran</Text>
                <Text>{value[0].sendButtonMP}</Text>
                <Text>Ket.</Text>
                <Text>Belum Bayar</Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        )
      }
    })

    return (
      <View style={styleStore.component}>
        <View style={styleStore.header}></View>
        <View style={styleStore.valueComponent}>
          <ScrollView>{mapList}</ScrollView>
        </View>
      </View>
    )
  }
}

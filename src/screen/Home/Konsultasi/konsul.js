import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, AsyncStorage, Linking } from 'react-native'
import { styleKonsul } from '../style'
import { db } from '../../../fireBase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
let itemRef = db.ref('/consultant')
const Back = <Icons name="arrow-left" size={20}/>
const create = <Icons name='note' size={20} />
class Konsultasi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: [],
      like: false,
      angkaLike: '',
      AdminOrNo: ''
    }
  }

  componentDidMount () {
    //======= get data ========
    itemRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ Data: items })
    })

    AsyncStorage.getItem('AdminOrNo').then(value => {
      this.setState({ AdminOrNo: value })
      this.filter()
    })
  }

  //=====like=====
  likeUnlike = () => {
    if (this.state.like === true) {
      this.setState({ angkaLike: parseInt(this.state.angkaLike) + 1 })
      return (
        <View>
          <Text>like</Text>
          <Text>{this.state.angkaLike}</Text>
        </View>
      )
    } else {
      this.setState({ angkaLike: parseInt(this.state.angkaLike) - 1 })
      return (
        <View>
          <Text>UnLike</Text>
          <Text>{this.state.angkaLike}</Text>
        </View>
      )
    }
  }

  onScreenHome = detailItem => {
    this.props.navigation.navigate('ChatKonsul', { detail: detailItem })
  }
  //====== renderItem =======
  renderItem = ({ item }) => {
    return (
      <View style={styleKonsul.Content}>
        <View style={styleKonsul.viewImage}>
          <View
            style={{ borderWidth: 2, width: '100%', borderColor: '#d3d3d3' }}
          >
            <Image style={styleKonsul.image} source={{ uri: item.image }} />
          </View>
        </View>
        <View style={styleKonsul.viewUsername}>
          <View style={styleKonsul.ViewUser}>
            <Text style={{ fontSize: 17, fontWeight: '800' }}>
              {item.username}
            </Text>
            <Text style={{ fontSize: 13 }}>{item.keterangan}</Text>
            <Text style={{ fontSize: 15, marginVertical: 5 }}>
              {item.alamat}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({ angkaLike: item.like, like: !this.state.like })
              }
            >
              {this.likeUnlike()}
            </TouchableOpacity>
          </View>
          <View style={styleKonsul.viewKonsul}>
            {this.state.AdminOrNo === 'admin' ? (
              <TouchableOpacity
                style={styleKonsul.touchKonsul}
                activeOpacity={0.7}
              >
                {create}<Text>edit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styleKonsul.touchKonsul}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('whatsapp://send?text=' + "Assalamualaikum..." + '&phone=62' + "081573776935")}
              >
                <Text>Konsultasi</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    )
  }
  render () {
    return (
      <View style={styleKonsul.component}>
        <View style={styleKonsul.header}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          {Back}
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', padding: 5 }}>
          <FlatList
            data={this.state.Data}
            keyExtractor={(index, item) => index.toString()}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}
export default Konsultasi

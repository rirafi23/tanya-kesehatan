import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { styleLainya } from './style'
import Data from './json.json'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'
const Logout = <Icon name='logout' size={20} style={{ marginRight: 8 }} />
const create = <Icon name='note' size={20} />
const notebook = <Icon name='notebook' size={20}/>

class IndexScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: Data,
      Alamat: [],
      email: '',
      username: '',
      password: '',
      no_telephone: ''
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('email').then(value => {
      this.setState({ email: value })
    })
    AsyncStorage.getItem('no_telephone').then(value => {
      this.setState({ no_telephone: value })
    })
    AsyncStorage.getItem('username').then(value => {
      this.setState({ username: value })
    })
    AsyncStorage.getItem('password').then(value => {
      this.setState({ password: value })
    })
    AsyncStorage.getItem('Alamat').then(value => {
      if(value != null){
      this.setState({ Alamat: JSON.parse(value) })}
    })
  }
  back = () => {
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('username')
    AsyncStorage.removeItem('password')
    AsyncStorage.removeItem('AdminOrNo')
    AsyncStorage.removeItem('no_telephone')
    AsyncStorage.removeItem('Alamat')
    this.props.navigation.navigate('Login')
  }
  render () {
    let Alamat = this.state.Alamat.map(value => {
      return (
        <View>
          <Text>{value.alamat}</Text>
        </View>
      )
    })
    return (
      <View style={styleLainya.component}>
        <View style={styleLainya.cardPP}>
          <View style={styleLainya.cardImage}>
            <Image
              source={{
                uri:
                  'https://www.bigstockphoto.com/images/homepage/module-6.jpg'
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={styleLainya.cardText}>
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')}>
                {create}
              </TouchableOpacity>
            </View>
            <Text style={styleLainya.textUserName}>{this.state.username}</Text>
            <Text style={styleLainya.text}>{this.state.no_telephone}</Text>
            <Text style={styleLainya.text}>{this.state.email}</Text>
            {Alamat}
          </View>
        </View>

        <View style={{ width: '100%', paddingHorizontal: 5, marginTop: 30 }}>
          <Text style={{ fontSize: 20 }}>Lainya.</Text>
          <FlatList
            data={this.state.Data}
            keyExtractor={(index, item) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styleLainya.itemComponent}
                  activeOpacity={0.7}
                  onPress={() => this.props.navigation.navigate(item.onPress)}
                >
                <Icon name={item.icon} size={20} style={{marginRight:3}}/>
                  <Text style={styleLainya.textIC}>{item.nama}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: '15%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', height: 50 }} onPress={this.back}>
            {Logout}
            <Text
              style={{ fontSize: 20, color: 'red', justifyContent: 'center' }}
            >
              Keluar
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#d3d3d3' }}>BetaApp</Text>
          <Text style={{ fontSize: 14, color: '#d3d3d3' }}>copyright@2020</Text>
        </View>
      </View>
    )
  }
}
export default IndexScreen

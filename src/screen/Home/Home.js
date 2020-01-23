import React from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { styleHome } from './style'
import ListScreen from './list'
import { db } from '../../fireBase/firebase'
import Admin from '../Home/admin/index'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Konsul: 'Konsultasi',
      dagang: 'Beli Obat herbal',
      Login: '',
      Data: [],
      email: '',
      no_telephone: '',
      password: '',
      username: '',
      AdminOrNo: ''
    }
  }

  componentDidMount () {
      
    AsyncStorage.getItem('AdminOrNo').then(value => {
      this.setState({ AdminOrNo: value })
      this.filter()
    })
    AsyncStorage.getItem('email').then(value => {
      this.setState({ email: value })
      this.filter()
    })
    AsyncStorage.getItem('no_telephone').then(value => {
      this.setState({ no_telephone: value })
      this.filter()
    })
    AsyncStorage.getItem('username').then(value => {
      this.setState({ username: value })
      this.filter()
    })
    AsyncStorage.getItem('password').then(value => {
      this.setState({ password: value })
      this.filter()
    })
  }

  //condition admin or not admin
  //   createHome = () => {
  //     if (this.state.Login === 'Admin') {
  //       return (
  //         <View>
  //           <Text>Admin</Text>
  //         </View>
  //       )
  //     } else {
  //       return (
  //         <View>
  //           <Text>Not Admin</Text>
  //         </View>
  //       )
  //     }
  //   }

  

  AdminOrNo = () => {
    if (this.state.AdminOrNo === 'user') {
      return (
        <View style={styleHome.component}>
          <Text onPress={this.back} style={styleHome.TextApk}>
            Beta App
          </Text>
          <View>
            <Text style={styleHome.textTitle} onPress={this.filter}>
              kami Bisa MenBantu Anda{' '}
            </Text>
            <View style={styleHome.content}>
              <TouchableOpacity
                style={styleHome.cardContent}
                onPress={() => this.props.navigation.navigate('Konsultasi')}
              >
                <Text style={styleHome.textCardContent}>
                  {this.state.Konsul}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styleHome.cardContent}
                onPress={() => this.props.navigation.navigate('Store')}
              >
                <Text style={styleHome.textCardContent}>
                  {this.state.dagang}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleHome.listContent}>
            <Text>{this.state.AdminOrNo}</Text>
            <Text
              style={styleHome.textInfo}
            >
              Info Hari ini
            </Text>
            <ListScreen navigation={this.props.navigation} />
          </View>
        </View>
      )
    } else if (this.state.AdminOrNo === 'admin') {
      return <Admin />
    }
  }
  render () {
    return (
      <View style={{ width: '100%', height: '100%' }}>{this.AdminOrNo()}</View>
    )
  }
}
export default HomeScreen

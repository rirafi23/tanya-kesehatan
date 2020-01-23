import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image,
  StatusBar
} from 'react-native'
import { styleLogin } from './style'
import { Firebase, db } from '../../fireBase/firebase'

let itemRef = db.ref('/dbUser')
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      Data: []
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('email').then(value => {
      if (value != null) {
        this.props.navigation.navigate('Bottom')
      }
    })
    itemRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ Data: items })
    })
  }
  Login = () => {
    let { email, password } = this.state
    try {
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.state.Data.filter(value => {
            if (value.email === res.user.email) {
              AsyncStorage.setItem('username', value.username)
              AsyncStorage.setItem('AdminOrNo', value.AdminOrNo)
              AsyncStorage.setItem('password', value.password)
              AsyncStorage.setItem('no_telephone', value.no_telephone)
              AsyncStorage.setItem('email', res.user.email)
            }
          })
          console.log(res.user.email)
          this.props.navigation.navigate('Bottom')
        })
    } catch (error) {
      console.log(error.toString(error))
      alert(error)
    }
  }

 
  render () {
    return (
      <View style={styleLogin.component}>
      <StatusBar barStyle="dark-content" />
        <Image source={require('../../asset/photo6145183746660346124.jpg')} style={{height:100, width:100, borderRadius:20}}/>
        <Text style={styleLogin.textTH}>tanya_herbal</Text>
        <Text style={styleLogin.text}>E-mail</Text>
        <TextInput
          style={styleLogin.TextInput}
          placeholder="E-mail"
          onChangeText={text => this.setState({ email: text })}
        />
        <Text style={styleLogin.text}>password</Text>
        <TextInput
          style={styleLogin.TextInput}
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity style={styleLogin.bottomLogin} onPress={this.Login}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text>create your Account</Text>
          <Text
            style={styleLogin.textReg}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            Register
          </Text>
        </View>
      </View>
    )
  }
}
export default Login

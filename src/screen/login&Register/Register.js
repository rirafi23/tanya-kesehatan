import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Firebase, db } from '../../fireBase/firebase'
import { TextInput } from 'react-native-gesture-handler'
import { styleRegister } from './style'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
      no_telephone: '',
      AdminOrNo:'user'
    }
  }
  SignUp = e => {
    let { email, password } = this.state
    try {
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            this.addUser()
          console.log(user)
        })
    } catch (error) {
      console.log(error.toString(error))
      alert(error)
    }
  }

  addUser=()=>{
      let {email, password, username, no_telephone, AdminOrNo} = this.state
      db.ref("/dbUser").push({
          username:username,
          email:email,
          no_telephone:no_telephone,
          password:password,
          AdminOrNo:AdminOrNo
      })
  }
  render () {
    return (
      <View style={styleRegister.component}>
      <Text style={styleRegister.textCYA}>Create your account</Text>
      <Text style={styleRegister.text}>Nama Lengkap</Text>
        <TextInput
          style={styleRegister.TextInput}
          onChangeText={text => this.setState({ username: text })}
        />
        <Text style={styleRegister.text}>No Telephone</Text>
        <TextInput
          style={styleRegister.TextInput}
          onChangeText={text => this.setState({ no_telephone: text })}
        />
        <Text style={styleRegister.text}>E-mail</Text>
        <TextInput
          style={styleRegister.TextInput}
          onChangeText={text => this.setState({ email: text })}
        />
        <Text style={styleRegister.text}>Password</Text>
        <TextInput
          style={styleRegister.TextInput}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity onPress={this.SignUp} style={styleRegister.touchReg}>
          <Text>Send</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 30
          }}
        >
          <Text>sudah punya account</Text>
          <Text
            style={{ marginLeft: 5, color: '#65dd', fontWeight: '400' }}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            Login
          </Text>
        </View>
      </View>
    )
  }
}

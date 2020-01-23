import React from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  AsyncStorage
} from 'react-native'
import { db } from '../../../fireBase/firebase'
import { styleChat } from '../style'

// let itemRef = db.ref('/message/"'+this.props.navigation.state.params.detail[0],+'"')
class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: [],
      textPesan: '',
      email: 'null',
      tanggal: 'null',
      image: 'null',
      emailDia: this.props.navigation.state.params.detail[0],
      noKu: ''
    }
  }

  componentDidMount () {
    //getEmailKu
    AsyncStorage.getItem('noKu').then(value => {
      this.setState({ noKu: value })
      let itemRef = db.ref('/message/'+value)
      //======= get data ========
      itemRef.on('value', snapshot => {
        let data = snapshot.val()
        if (data != null) {
          let items = Object.values(data)
          this.setState({ Data: items })
        } else {
          this.state.Data.push({
            textPesan: '',
            emailKu: '',
            emailDia: '',
            tanggal: '',
            image: ''
          })
        }
      })
    })
  }

  filter = () => {
    let emailKu = this.state.emailKu
    let emailDia = this.state.emailDia
    let Data = this.state.Data
    let hasilData = []
    Data.map(value => {
      if (value.emailKu === emailKu) {
        hasilData.push(value)
      } else if (value.emailKu === emailDia) {
        hasilData.push(value)
      }
    })
    alert(JSON.stringify(hasilData))
  }
  //send
  send = () => {
    let { textPesan, noKu, emailDia, tanggal, image } = this.state
    db.ref('/dbObat').push({
      textPesan: textPesan,
      noKu: noKu,
      emailDia: emailDia,
      tanggal: tanggal,
      image: image
    })
    this.setState({ textPesan: '' })
    console.log('success')
  }

  //renderItem
  renderItem = ({ item }) => {
    // if (item.emailKu === this.state.emailKu) {
    //   return (
    //     <View>
    //       <Text style={{ color: 'green' }}>{item.textPesan}</Text>
    //       <Text>{item.tanggal}</Text>
    //     </View>
    //   )
    // } else {
      return (
        <View>
          <Text style={{ color: 'red' }}>{item.textPesan}</Text>
          <Text>{item.tanggal}</Text>
        </View>
      )
    // }
  }
  render () {
    return (
      <View style={styleChat.component}>
        <View style={styleChat.header}>
          <Text>{this.state.noKu}</Text>
          <Text>{this.state.emailDia}</Text>
        </View>
        <View style={styleChat.content}>
          <FlatList
            data={this.state.Data}
            keyExtractor={(index, item) => index.toString()}
            renderItem={this.renderItem}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            position: 'absolute'
          }}
        >
          <View style={styleChat.ViewChat}>
            <TextInput
              style={styleChat.TextInput}
              placeholder='text'
              onChangeText={text => this.setState({ textPesan: text })}
            />
            <View style={styleChat.send}>
              <TouchableOpacity onPress={this.send}>
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default ChatScreen

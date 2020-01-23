import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native'
import Data from './Bantuan.json'

class Bantuan extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: Data,
      linking: ''
    }
  }

  linking = item => {
    if (item.onPress === 'message') {
      Linking.openURL(`sms:${123456789}`)
    } else if (item.onPress === 'noTelp') {
      Linking.openURL('tel:${1234567}')
    } else if (item.onPress === 'email') {
      Linking.openURL('mailto://calonapt1@gmail.com&subject=abcdefg&body=body')
    }
  }
  render () {
    return (
      <View>
        <View
          style={{ width: '100%', height: 50, backgroundColor: '#fff' }}
        ></View>
        <View
          style={{
            paddingVertical: 15,
            marginHorizontal: 3,
            elevation: 5,
            backgroundColor: '#fff'
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            Beritahu kami masalah kamu. biar kami bantu :{' '}
          </Text>
          <FlatList
            data={this.state.Data}
            numColumns={3}
            keyExtractor={index => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ width: '33%', alignItems: 'center' }}>
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      height: 80,
                      borderWidth: 1,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    onPress={() => this.linking(item)}
                  >
                    <Text>{item.nama}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 50,
            paddingHorizontal: 10
          }}
        >
          <Image
            source={require('../../asset/photo6145183746660346124.jpg')}
            style={{ width: 100, height: 100, borderRadius: 100 ,marginBottom: 20}}
          />

          <Text>@TanyaKesehatan.co.id</Text>
          <Text>desc</Text>
        </View>
      </View>
    )
  }
}
export default Bantuan

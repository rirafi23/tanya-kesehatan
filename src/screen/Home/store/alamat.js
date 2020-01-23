import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { styleAlamat } from '../style'
class Alamat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nama: '',
      no_telephone: '',
      alamat: '',
      AlamatSave: []
    }
  }
  saveData = () => {
    let { nama, no_telephone, alamat } = this.state
    let Alamat = []
    let save = {
      nama: nama,
      no_telephone: no_telephone,
      alamat: alamat
    }
    Alamat.push(save)
    AsyncStorage.setItem('Alamat', JSON.stringify(Alamat))
    alert(JSON.stringify(save))
  }
  render () {
    return (
      <View style={styleAlamat.component}>
        <View style={styleAlamat.header}>
          <TouchableOpacity onPress={this.saveData}>
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
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
    )
  }
}
export default Alamat

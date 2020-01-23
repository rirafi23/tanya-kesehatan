import React from 'react'
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import { styleAlamat } from '../Home/style'
import Icon from 'react-native-vector-icons/MaterialIcons'

const save_alt = <Icon name="save" size={18} style={{marginLeft:3}}/>
class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // alamat
      nama: '',
      no_telephone: '',
      alamat: '',
      AlamatSave: []
    }
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
    AsyncStorage.setItem('username', this.state.nama)
    AsyncStorage.setItem('no_telephone', this.state.no_telephone)
    this.props.navigation.navigate('Lainya')
  }
  render () {
    return (
      <View style={styleAlamat.component}>
        <View style={styleAlamat.header}>
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
    )
  }
}
export default Edit

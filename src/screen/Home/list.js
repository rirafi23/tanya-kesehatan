import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { db } from '../../fireBase/firebase'
import { styleList } from './style'
let itemRef = db.ref('/news')

export default class ListScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Data: []
    }
  }

  componentDidMount () {
    //======= get data ========
    itemRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ Data: items })
    })
  }
  onScreenHome=(detailItem)=>{
    this.props.navigation.navigate("InList", {detail:detailItem})
  }

  //====== renderItem ========
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styleList.itemComponent}
        activeOpacity={0.6}
        onPress={() => this.onScreenHome([`${item.deskripsi}`,`${item.image}`,`${item.link}`,`${item.refrensi}`,`${item.tanggal}`, `${item.title}`])}
      >
        <View style={styleList.contentImage}>
          <Image
            source={{ uri: item.image }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={styleList.contentDesc}>
          <Text style={styleList.itemTextTitle}>{item.title}</Text>
          <Text style={styleList.textDS}>{item.deskripsi_singkat}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={{ width: '100%' }}>
        <FlatList
          data={this.state.Data}
          keyExtractor={(index, Item) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

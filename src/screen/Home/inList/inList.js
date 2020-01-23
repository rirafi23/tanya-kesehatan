import React from 'react'
import { View, Text, Image, ScrollView, Share, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const share = (<Icon name="share" size={20} style={{marginRight:10}} /> )
const back = <Icon name="arrow-left" size={20}/>
export default class inList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deskripsi: this.props.navigation.state.params.detail[0],
      image: this.props.navigation.state.params.detail[1],
      link: this.props.navigation.state.params.detail[2],
      refrensi: this.props.navigation.state.params.detail[3],
      tanggal: this.props.navigation.state.params.detail[4],
      title: this.props.navigation.state.params.detail[5]
    }
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.state.refrensi
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message)
    }
  }
  render () {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#fff',
              elevation: 5,
              flexDirection:'row',
              justifyContent:'space-between',
              paddingHorizontal:10,
              alignItems:'center'
            }}
          >
          <Text onPress={()=>this.props.navigation.navigate('Home')}>{back}</Text>
            <TouchableOpacity onPress={this.onShare}>{share}</TouchableOpacity>
          </View>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: this.state.image }}
          />
          <View
            style={{
              padding: 10,
              borderBottomWidth: 2,
              borderBottomColor: '#d3d3d3',
              marginBottom: 20
            }}
          >
            <Text style={{fontSize:19, fontWeight:'900'}}>{this.state.title}</Text>
            <Text style={{fontSize:13, fontWeight:'100'}}>{this.state.tanggal}</Text>
          </View>
          <View style={{ width: '100%', paddingHorizontal: 8, marginBottom:30 }}>
            <Text style={{ textAlign: 'justify' }}>{this.state.deskripsi}</Text>
            <Text
              style={{
                marginTop: 15,
                paddingVertical: 5,
                fontSize: 16,
                fontWeight: '500',
                
              }}
            >
              Refrensi.
            </Text>
            <Text>#{this.state.refrensi}</Text>
          <Text style={{fontSize:15, fontStyle:'italic', marginBottom:3, marginTop:15}}>Komentar.</Text>
          <TextInput
            style={{height:100, width:'100%', borderWidth:1, paddingHorizontal:10, fontSize:15, borderRadius:5}}
            placeholder="comment"
          />
          <TouchableOpacity style={{width:80, paddingVertical:5, backgroundColor:'#d3d3d3', alignItems:'center', marginTop:15, borderRadius:5}}>
          <Text style={{fontSize:15, fontWeight:'700'}}>send</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

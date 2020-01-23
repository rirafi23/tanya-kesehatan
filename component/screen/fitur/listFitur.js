import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styleList} from './style'
class ListFitur extends React.Component{
    render(){
        return(
            <View style={styleList.component}>
                <View style={styleList.cardIdentitas}>
                    <View style={styleList.cradIden1}></View>
                    <View style={styleList.cradIden2}>
                        <Text style={{textAlign:'right', paddingRight:10, paddingTop:5}}>X</Text>
                        <Text>Username</Text>
                        <Text>No Hp</Text>
                        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-around'}}>
                            <Text>umur</Text>
                            <Text>BB</Text>
                        </View>
                        <Text>Alamat</Text>
                    </View>
                </View>
                <Text style={styleList.TextFitur}>Lainnya</Text>
                <TouchableOpacity style={styleList.Content}>
                    <View style={styleList.cardContent1}></View>
                    <View style={styleList.cardContent2}>
                        <Text>Bantuan</Text>
                    </View>
                    <View style={styleList.cardContent3}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styleList.Content}>
                    <View style={styleList.cardContent1}></View>
                    <View style={styleList.cardContent2}>
                        <Text>About</Text>
                    </View>
                    <View style={styleList.cardContent3}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styleList.Content}>
                    <View style={styleList.cardContent1}></View>
                    <View style={styleList.cardContent2}>
                        <Text>Exit</Text>
                    </View>
                    <View style={styleList.cardContent3}></View>
                </TouchableOpacity>
                <View style={{width:'100%', alignItems:'center', marginTop:80}}>
                    <Text>Beta App</Text>
                    <Text>versions 0.0.1</Text>
                </View>
            </View>
        )
    }
}
export default ListFitur
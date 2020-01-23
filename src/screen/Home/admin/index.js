import React  from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import Data from './admin.json'
import {styleAdmin} from './style'
class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Data:Data   
        }
    }

    //renderItem
    renderItem=({item})=>{
        return(
            <View style={styleAdmin.itemComponent}>
                <TouchableOpacity style={styleAdmin.cardItem} onPress={()=>this.props.navigation.navigate(item.onPress)}>
                <Text>{item.nama}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View style={styleAdmin.component}>
                <View style={styleAdmin.header}></View>
                <Text>Admin</Text>
                <FlatList
                    data={this.state.Data}
                    numColumns={2}
                    keyExtractor={(index)=>index.toString()}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
export default Admin
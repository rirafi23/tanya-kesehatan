import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {styleLogin} from './style'
class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styleLogin.component}>
                <TextInput
                    style={styleLogin.textInput}
                />
            </View>
        )
    }
}
export default LoginScreen
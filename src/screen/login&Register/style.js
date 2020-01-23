import {StyleSheet, Dimensions} from 'react-native'
const {width:WIDTH} = Dimensions.get('window')
export const styleLogin = StyleSheet.create({
    component:{
        width:'100%',
        height:'100%',
        paddingHorizontal:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    TextInput:{
        width:'100%',
        height:55,
        backgroundColor:'#d3d3d3',
        marginVertical:3,
        paddingHorizontal:10,
        borderRadius:5
    },
    bottomLogin:{
        width:'50%',
        height:45,
        backgroundColor:'#d3d3d3',
        borderRadius:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    textReg:{
        marginLeft:5,
        color:'#65dd',
        fontSize:15
    },
    textTH:{
        fontSize:23,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:50
    },
    text:{
        fontSize:16,
        marginVertical:5,
        width:WIDTH -80
    }
})

export const styleRegister = StyleSheet.create({
    component:{
        width:'100%',
        height:'100%',
        paddingHorizontal:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    TextInput:{
        width:'100%',
        height:50,
        marginVertical:3,
        backgroundColor:'#d3d3d3',
        borderRadius:5
    },
    touchReg:{
        width:'50%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d3d3d3',
        borderRadius:10,
        marginTop:30
    },
    textCYA:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom:30,
        width:WIDTH - 60
    },
    text:{
        fontSize:15,
        marginVertical:5,
        width:WIDTH - 60
    }
    
})
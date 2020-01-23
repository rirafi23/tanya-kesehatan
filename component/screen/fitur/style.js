import {StyleSheet} from 'react-native'

export const styleList = StyleSheet.create({
    component:{
        width:'100%',
        height:'100%',
        flex:1,
        paddingHorizontal:5
    },
    Content:{
        width:'100%',
        borderRadius:10,
        borderBottomWidth:2,
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#d3d3d3'
    },
    TextFitur:{
        width:'25%',
        paddingHorizontal:10,
        paddingVertical:8,
        backgroundColor:'#d3d3d3',
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        fontSize:15,
        marginVertical:10
    },
    cardContent1:{
        width:'15%',
        paddingVertical:10,
        // backgroundColor:'red',
    },
    cardContent2:{
        width:'70%',
        paddingVertical:10,
        // backgroundColor:'gray',
    },
    cardContent3:{
        width:'15%',
        paddingVertical:10,
        // backgroundColor:'green',
    },
    cardIdentitas:{
        width:'100%',
        height:150,
        borderWidth:1,
        marginVertical:10,
        flexDirection:'row',
        padding:3
    },
    cradIden1:{
        width:'35%',
        height:'100%',
        backgroundColor:'red'
    },
    cradIden2:{
        width:'65%',
        height:'100%',
        backgroundColor:'green',
        paddingHorizontal:3
    }
})
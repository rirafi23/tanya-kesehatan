import { StyleSheet } from 'react-native'

export const styleHome = StyleSheet.create({
  component: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  textTitle: {
    fontSize: 15,
    width: '60%',
    paddingVertical: 8,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10
  },
  textInfo: {
    fontSize: 15,
    width: '35%',
    paddingVertical: 8,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10,
    marginBottom: 5
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  cardContent: {
    width: '45%',
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCardContent: {
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center'
  },
  listContent: {
    width: '100%',
    paddingHorizontal: 5
  },
  TextApk: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d3d3d3',
    paddingLeft: 10,
    marginVertical: 10
  }
})

export const styleKonsul = StyleSheet.create({
  component: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  header: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent:'center',
    paddingHorizontal:10
  },
  Content: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    padding: 3,
    backgroundColor: '#fff',
    elevation: 5,
    borderWidth: 2,
    borderColor: '#d3d3d3'
  },
  viewImage: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewUsername: {
    width: '70%',
    height: '100%',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 3
  },
  ViewUser: {
    width: '100%',
    height: '70%'
  },
  viewKonsul: {
    width: '100%',
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  touchKonsul: {
    width: '50%',
    paddingVertical: 5,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    borderRadius: 5
  },
  textUser: {
    fontSize: 16,
    marginVertical: 1,
    fontWeight: '100'
  }
})

export const styleChat = StyleSheet.create({
  component: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'gray',
    opacity: 0.7
  },
  content: {
    width: '100%'
  },
  ViewChat: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  TextInput: {
    width: '80%',
    minHeight: 50,
    maxHeight: 100,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  send: {
    width: '20%',
    minHeight: 50,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const StyleStore = StyleSheet.create({
  component: {
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10
  },
  TextInput: {
    width: '95%',
    height: 40,
    borderWidth: 0.7,
    marginLeft: 10,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  itemComponent: {
    width: '50%',
    alignItems: 'center'
  },
  cardItem: {
    width: '90%',
    height: 260,
    borderWidth: 1,
    alignItems: 'center'
  },
  viewKet: {
    width: '100%',
    paddingHorizontal: 5
  },
  text: {
    fontSize: 14,
    marginVertical: 2,
    textAlign: 'left'
  },
  textAdd: {
    paddingVertical: 4,
    width: 100,
    backgroundColor: 'green',
    marginTop: 220,
    textAlign: 'center',
    position:'absolute', 
  },
  ModalComponent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardModal: {
    width: '80%',
    height: 180,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10
  },
  TextAddDel: {
    fontSize: 18,
    height: 40,
    width: 45,
    backgroundColor: '#fff',
    elevation: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextAddDel1: {
    width: '50%',
    height: 40,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 8
  },
  textProduct: { fontSize: 15, fontWeight: 'bold', marginVertical: 3 },
  text1: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  textAddDelete: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewSave: { width: '100%', alignItems: 'center', marginTop: 20 },
  touchSave: {
    width: '50%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 5
  },
  contentAbsolute: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute'
  },
  cardAbsolute: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  ViewAlamat:{
    width:'100%',
    height:90,
    borderWidth:1,
    borderColor:"#f5f5f5",
    backgroundColor:'#fff',
    elevation:5,
    padding:10,
    borderRadius:5
    
  },
  TextCKP:{
    width:155,
    paddingVertical:8,
    backgroundColor:'#d3d3d3',
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    paddingLeft:10,
    marginVertical:15
  },
  viewJH:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:5
  },
  listBuy:{
    width:'100%',
    borderBottomWidth:2,
    borderTopWidth:2,
    paddingVertical:10,
    borderColor:'#d3d3d3',
    marginVertical:5,
    paddingHorizontal:5
  },
  viewBuy:{
    width:'100%',
    paddingVertical:10,
    paddingHorizontal:5,
    borderColor:'gray',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:2, 
    borderBottomColor:'#d3d3d3'
  },
  itemRow:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:3
  }
})

export const styleList = StyleSheet.create({
  itemComponent: {
    width: '100%',
    height: 90,
    borderRadius: 5,
    marginVertical: 5,
    padding: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3
  },
  contentImage: {
    width: '28%',
    height: '100%',
    backgroundColor: '#d3d3d3'
  },
  contentDesc: {
    width: '72%',
    height: '100%',
    paddingLeft: 5
  },
  itemTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  },
  textDS: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'auto'
  }
})

export const styleAlamat = StyleSheet.create({
  component:{
    width:'100%',
    height:'100%',
    paddingHorizontal:15
  },
  header:{
    width:'100%',
    height:45,
    alignItems:'center',
    paddingRight:10,
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom:20
  },
  TextInput:{
    width:'100%',
    borderBottomWidth:2,
    borderBottomColor:'#d3d3d3',
    height:50
  },
  InputAlamat:{
    width:'100%',
    borderWidth:1,
    borderColor:'#d3d3d3',
    height:100
  },
  Text:{
    marginTop:10,
    marginBottom:5,
    fontSize:15,
  },
  
})
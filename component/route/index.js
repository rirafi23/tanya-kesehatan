import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

//screen
import LoginScreen from '../screen/LR/login'
import HomeScreen from '../screen/Home/Home'
import Fitur from '../screen/fitur/listFitur'
import Konsul from '../screen/Home/Konsultasi/konsul'
import Chat from '../screen/Home/Konsultasi/chat'
import Store from '../screen/Home/store/listStore'
const Bottom = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Fitur:{
    screen:Fitur,
    navigationOptions:{
      header:null
    }
  }
})

const Route = createStackNavigator({
  Bottom: {
    screen: Bottom,
    navigationOptions: {
      header: null
    }
  },
  Konsul:{
    screen:Konsul,
    navigationOptions:{
      header:null
    }
  },
  Chat:{
    screen:Chat,
    navigationOptions:{
      header:null
    }
  },
  Store:{
    screen:Store,
    navigationOptions:{
      header:null
    }
  }
})

export default createAppContainer(Route)

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Login from '../screen/login&Register/Login'
import Signup from '../screen/login&Register/Register'
import Home from '../screen/Home/Home'
import Konsultasi from '../screen/Home/Konsultasi/konsul'
import ChatKonul from '../screen/Home/Konsultasi/chat'
import InList from '../screen/Home/inList/inList'
//store
import Store from '../screen/Home/store/listStore'
import Alamat from '../screen/Home/store/alamat'
import TampilPesan from '../screen/Home/store/cekPemsanan'
import AddStore from '../screen/Home/store/addStore'
//admin
import Admin from '../screen/Home/admin/index'
//laninya
import laninyaScreen from '../screen/lainya/index'
import Riwayat from '../screen/lainya/riwayatTS'
import Bantuan from '../screen/lainya/bantuan'
import Edit from '../screen/lainya/edit'
const Bottom = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Lainya: {
    screen: laninyaScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})
const SwitchNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Signup,
      navigationOptions: {
        header: null
      }
    },
    Bottom: {
      screen: Bottom,
      navigationOptions: {
        header: null
      }
    },
    Admin: {
      screen: Admin,
      navigationOptions: {
        headerShown: false
      }
    },
    Konsultasi: {
      screen: Konsultasi,
      navigationOptions: {
        header: null
      }
    },
    ChatKonsul: {
      screen: ChatKonul,
      navigationOptions: {
        header: null
      }
    },
    InList: {
      screen: InList,
      navigationOptions: {
        header: null
      }
    },
    Store: {
      screen: Store,
      navigationOptions: {
        header: null
      }
    },
    Alamat: {
      screen: Alamat,
      navigationOptions: {
        header: null
      }
    },
    TampilPesan: {
      screen: TampilPesan,
      navigationOptions: {
        header: null
      }
    },
    AddStore: {
      screen: AddStore,
      navigationOptions: {
        headerShown: false
      }
    },
    Riwayat: {
      screen: Riwayat,
      navigationOptions: {
        headerShown: false
      }
    },
    Bantuan: {
      screen: Bantuan,
      navigationOptions: {
        headerShown: false
      }
    },
    Edit:{
      screen:Edit,
      navigationOptions:{
        headerShown:false
      }
    },
    Lainya: {
    screen: laninyaScreen,
    navigationOptions: {
      headerShown: false
    }
  }
  },
  {
    initialRouteName: 'Login'
  }
)

export default createAppContainer(SwitchNavigator)

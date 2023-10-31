// --- IMPORTS
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons'

import { Main } from '../screens/01_main/01_main';
import { Scanner } from '../screens/02_scanner/02_scanner';
import { Historic } from '../screens/03_historic/03_historic';


// --- IMPORT SCREENS


//DESISTRUCRUTING SCREENS METHODS
const { Navigator, Screen } = createMaterialBottomTabNavigator()



export function AppTabRoutes () {

  return (
    <Navigator initialRouteName='main'>

      <Screen
        name='main' component={Main}
        options={{
          title: 'Criar QR',
          tabBarIcon: () =>  <MaterialIcons name="create" color={'black'} size={24} />
        }}
      />

      <Screen
        name='scanner' component={Scanner}
        options={{
          title: 'Scanner',
          tabBarIcon: () =>  <MaterialIcons name="camera-alt" color={'black'} size={26} />
        }}
      />

      <Screen
        name='historic' component={Historic}
        options={{
          title: 'Historic',
          tabBarIcon: () =>  <MaterialIcons name="history" color={'black'} size={26} /> 
        }}
      />

    </Navigator>
  )
}

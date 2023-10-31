import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons} from 'react-native-vector-icons'
import { TouchableOpacity, View } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

import { AppTabRoutes } from './app.TabRoutes';
import { Link } from '../screens/01_main/02_link';
import { QRLink } from '../screens/01_main/02_link/QRLink';



export function AppStackRoutes () {
  return (
    <Navigator screenOptions={{animation: 'fade_from_bottom'}}>

      <Screen
        name='home' 
        component={AppTabRoutes}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />

      <Screen
        name='link' 
        component={Link}
        options={{
          title: 'QR Code from Link',
          headerShown: true
        }}
      />

      <Screen
        name='QR' 
        component={QRLink}
        options={{
          title: 'Your QR Code',
          headerShown: true
        }}
      />

      {/*<Screen name='wifi' component={Wifi} options={{title: 'Gerar QR Code from Wifi ', headerShown: true }}/>
      <Screen name='pix' component={Pix} options={{title: 'Gerar QR Code from Pix', headerShown: true }}/>*/}
    </Navigator>
  )
}

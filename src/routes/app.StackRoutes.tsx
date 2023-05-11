import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();



import { AppTabRoutes } from './app.TabRoutes';
import { Link } from '../screens/01_main/02_link';
import { QRLink } from '../screens/01_main/02_link/QRLink';


export function AppStackRoutes () {
  return (
    <Navigator>

      <Screen
        name='home' component={AppTabRoutes}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />

      <Screen
        name='link' component={Link}
        options={{
          title: 'QR Code from Link',
          headerShown: true
        }}
      />

      <Screen
        name='QR' component={QRLink}
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

import { createRef, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, ToastAndroid, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';



export function QRLink ({route}) {

  const qrCodeRef = useRef(null)

  function handleLink () {
    ToastAndroid.show('Abrindo navegador', ToastAndroid.SHORT)

    if (route.params.qr.charAt(0).includes('w')) {
      Linking.openURL('http://'.concat(route.params.qr))
    }

    else {
      Linking.openURL(route.params.qr)
    }
  }

  function saveImage () {
    if (qrCodeRef) {
      console.log(qrCodeRef.current)
    }
  }

  return (
    <View className='h-full w-11/12 items-center justify-center self-center' >
      <View className='flex-1 items-center justify-start w-screen mt-6' >

      <View className='mb-4'>
        <Button title="Save Image" onPress={saveImage}/>
      </View>

      <TouchableOpacity onPress={handleLink} className='items-center justify-center'>
        <QRCode
          value={route.params.qr ? route.params.qr : 'NA'}
          size={250}
          color={'black' }
          backgroundColor='white'
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={20}
          logoBackgroundColor='yellow'
          getRef={ c => qrCodeRef.current }
         
        />
        <Text className='mt-4 text-md font-bold'>URL</Text>
        <Text className='text-md underline text-blue-700'>{route.params.qr}</Text>

      </TouchableOpacity>


      </View>

    </View>
  )
}
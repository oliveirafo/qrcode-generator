import { createRef, useCallback, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, ToastAndroid, Share } from 'react-native';
import { MaterialIcons} from 'react-native-vector-icons'
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from 'react-native-view-shot';


export function QRLink ({route}) {
  const viewRef = useRef(null)

  const ShareableView = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1.0,
        fileName: 'MyQR'
      })
      await Share.share({
        url: uri,
        message: 'ola'
      })
    }

    catch (err) {
      console.log(err)
    }
  }

  function handleLink ()
  {
    ToastAndroid.show('Abrindo navegador', ToastAndroid.SHORT)

    if (route.params.qr.charAt(0).includes('w'))
      {
        Linking.openURL('http://'.concat(route.params.qr))
      }

    else
      {
        Linking.openURL(route.params.qr)
      }
  }


  return (
    <View className='h-full w-11/12 items-center justify-center self-center' >

      <View className='flex-1 items-center justify-start w-full mt-10' >
        <View ref={viewRef} className='bg-white p-8 rounded-md'>
          <QRCode
            value={route.params.qr ? route.params.qr : 'NA'}
            size={250}
            color={'black' }
            backgroundColor='white'
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={20}
            logoBackgroundColor='yellow'
          />
        </View>

        <Text className='mt-4 text-md font-bold'>URL</Text>
        <Text className='text-md underline text-blue-700'>{route.params.qr}</Text>

        <View className='flex-row m-2 bg-black items-center justify-evenly flex rounded-md w-36 mt-4'>
          <TouchableOpacity className='flex items-center p-2 w-16 bg-black rounded-md' onPress={ShareableView}>
            <MaterialIcons name="share" color={'white'} size={28} />
          </TouchableOpacity>
          <TouchableOpacity className='flex items-center p-2 w-16 bg-black rounded-md'>
            <MaterialIcons name="save" color={'white'} size={28} />
          </TouchableOpacity>
        </View>

      </View>



      
    </View>
  )
}
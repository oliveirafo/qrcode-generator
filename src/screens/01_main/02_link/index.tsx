import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert  } from 'react-native';


export function Link ({navigation}) {

  const [identificationValue, setIdentificationValue] = useState('')
  const values = ['http://', 'https://', 'www.']
  
  function identificationChangeText (e: string) {
    setIdentificationValue(e.trim())
  }

  function generateQR () {
    if (!identificationValue) {
      Alert.alert(
        '',
        'Preencha o campo'
      )
    }

    else if ( values.some(v => identificationValue.toLowerCase().includes(v)) ) {
      navigation.navigate('QR', {qr: identificationValue.toLowerCase()})
    }

    else {
      Alert.alert(
        'URL inválida',
        'Insira um link válido'
      )
    }
  }

  return (
    <View className='h-full w-11/12 items-center justify-center self-center' >
      <View className='flex-1 items-center justify-start w-screen mt-6' >

        <View className='items-center justify-between flex-col w-11/12'>
          <TextInput  
            className='border-b-2 mb-4 w-full text-lg pt-2 h-14'
            onChangeText={identificationChangeText}
            value={identificationValue}
            cursorColor={'#000'}
            keyboardType='url'
            placeholder='https:// ou www... '
            
          />
          <TouchableOpacity
            onPress={generateQR} 
            className='w-full bg-black h-12 items-center justify-center rounded-md'
          >
            <Text className='text-white font-bold text-lg'>CREATE CODE</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}
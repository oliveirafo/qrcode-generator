import { Button, FlatList, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { MaterialCommunityIcons, MaterialIcons, Fontisto } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

type OptionProps = {
  title: string
  subtitle: string
  iconFont: string
  iconMaterial: string
  h: number
}

export function Main ({navigation}: any) {

  function handleURL ()
  {
    navigation.navigate('link')
  }

  function TouchableOption (props: OptionProps) {
    return ( 
      <View className='flex-row items-center justify-start w-auto h-20 border-b-2 border-slate-300 bg-white px-2 gap-x-2'>
        <View className='items-start justify-center self-center pl-2'>
          <Fontisto name={props.iconFont} size={props.h} color="black" />
        </View>
      
        <View className='flex-col items-start justify-between'>
          <Text className='text-lg'> {props.title} </Text>
          <Text className='text-xs'> {props.subtitle} </Text>
        </View>

        <View className='flex-col flex-1 items-end justify-center'>
          <MaterialIcons name={"arrow-forward-ios"} size={24} color="black" />
        </View>
      </View>
    )
  }

  return (
    <View className='flex-1 items-center justify-center h-full w-full' >
      <StatusBar />

      <View className='flex-1 items-center justify-start w-full h-full '>

      <TouchableOpacity
        onPress={handleURL}
        className='items-center justify-start w-auto h-20 border-b-2 border-slate-300 bg-white px-2 gap-x-2'
      >
        <TouchableOption
          title={'URL'} 
          subtitle={'Insira um link para gerar o QR Code'} 
          iconFont={"world-o"} 
          iconMaterial={"arrow-forward-ios"}
          h={24}
        />
      </TouchableOpacity>

      {/*}  <TouchableOption 
          title={'Wi-fi Link'} 
          subtitle={'Gerar QR Code para Wifi'} 
          iconFont={"wifi"} 
          iconMaterial={"arrow-forward-ios"}
          h={18} 
        />

        <TouchableOption 
          title={'Telefone'} 
          subtitle={'Gerar QR Code para contato telefônico'} 
          iconFont={"phone"} 
          iconMaterial={"arrow-forward-ios"} 
          h={24} 
        />

        <TouchableOption 
          title={'PIX'} 
          subtitle={'Gerar QRCode Pix'} 
          iconFont={"qrcode"} 
          iconMaterial={"arrow-forward-ios"} 
          h={24} 
  /> */}


      </View>

    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';

export default function AboutView() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#5936B4',
      }}>
      <Text
        style={{
          fontSize: 40,
          color: 'white',
          fontFamily: 'FiraSans-Medium',
          fontWeight: 'bold',
          textAlign: 'center',

          marginTop: 20,
        }}>
        CuacaKu
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          fontFamily: 'FiraSans-Medium',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        0.0.1 v
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,

          height: 300,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontFamily: 'FiraSans-Medium',
            marginLeft: 20,
            backgroundColor: '#AEC9FF',
            borderRadius: 20,
            alignSelf: 'center',
            padding: 10,
          }}>
          Tentang Aplikasi
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 20,
            fontFamily: 'FiraSans-Medium',
            textAlign: 'justify',
            fontSize: 17,
          }}>
          CuacaKu adalah untuk membantu Anda memantau dan memahami kondisi cuaca
          setiap saat dan di mana saja.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          bottom: 70,
          zIndex: 1,
          height: 500,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontFamily: 'FiraSans-Medium',
            marginLeft: 20,
            borderRadius: 20,
            alignSelf: 'center',
            padding: 10,
            backgroundColor: '#AEC9FF',
          }}>
          Fitur Aplikasi
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 20,
            fontFamily: 'FiraSans-Medium',
            textAlign: 'justify',
            fontSize: 17,
          }}>
          CuacaKu adalah untuk membantu Anda memantau dan memahami kondisi cuaca
          setiap saat dan di mana saja.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#3658B1',
          borderRadius: 20,
          zIndex: 1,
          bottom: 350,


        }}>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontFamily: 'FiraSans-Medium',
            marginLeft: 20,
            borderRadius: 20,
            alignSelf: 'center',
            padding: 10,
            backgroundColor: '#AEC9FF',
          }}>
          Get Start!
        </Text>
      </View>
    </View>
  );
}

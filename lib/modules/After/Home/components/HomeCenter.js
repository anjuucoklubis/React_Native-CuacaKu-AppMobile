import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Time from './Time';
import Modal from './Modal';

export default function HomeCenter() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const Shape = () => {
    // MODAL GK AKTIF
    if (!isModalVisible) {
      return (
        <View>
          <Time />
          <Image
            source={require('../../../../assets/Home/House.png')}
            style={{
              width: 300,
              height: 300,
              resizeMode: 'cover',
              bottom: 110,
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity onPress={toggleModal}>
            <Image
              style={{
                bottom: 110,
                alignSelf: 'center',
                zIndex: 1,
              }}
              source={require('../../../../assets/Home/Box.png')}
            />
          </TouchableOpacity>
          {/* <Text
            style={{
              top: 195,
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'FiraSans-MediumItalic',
              zIndex: 1,
              alignSelf: 'center',
              position: 'absolute',
              color: '#C3FFFE',
            }}>
            Swipe
          </Text> */}
        </View>
      );
    } else {
      // MODAL AKTIF
      return (
        <View>
          <Text
            style={{
              bottom: 300,
              fontFamily: 'FiraSans-MediumItalic',
              fontSize: 35,
              color: '#C3FFFE',
              zIndex: 1,
              alignSelf: 'center',
              position: 'absolute',
            }}>
            Jakarta Weather
          </Text>
          <Image
            source={require('../../../../assets/Home/House.png')}
            style={{
              width: 300,
              height: 300,
              resizeMode: 'cover',
              bottom: 270,
              alignSelf: 'center',
            }}
          />

          <Image
            style={{bottom: 300}}
            source={require('../../../../assets/Home/Modal.png')}
          />
          <Modal />
          <TouchableOpacity onPress={toggleModal}>
            <Image
              style={{
                bottom: 610,
                height: 20,
                width: 150,
                alignSelf: 'center',
                borderRadius: 10,
              }}
              source={require('../../../../assets/Home/Shape.png')}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View>
      <ImageBackground
        source={require('../../../../assets/Image.png')}
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          top: -250,
        }}>
        <Shape />
      </View>
    </View>
  );
}

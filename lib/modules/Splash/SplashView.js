import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SplashView() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'OnBoarding'}],
      });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        resizeMode="stretch"
        style={styles.imgBackground}
        source={require('../../assets/Image.png')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/Splash/SplashLogoImage.png')}
        />
        <Image source={require('../../assets/Splash/SplashLogoText.png')} />
        {loading && <ActivityIndicator color="red" size="large" />}
      </View>
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: screenWidth,
    height: screenHeight,
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -220,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

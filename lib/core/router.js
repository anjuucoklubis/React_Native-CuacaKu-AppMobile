import React from 'react';
import { Image, View , StyleSheet,ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashView from '../modules/Splash/SplashView.js';
import OnBoarding from '../modules/OnBoarding/OnBoarding.js';
import HomeView from '../modules/After/Home/HomeView.js';
import WeatherView from '../modules/After/Weather/WeatherView.js';
import AboutView from '../modules/After/About/AboutView.js';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function router() {
  const MainApp = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 75,
            backgroundColor:'#48319D'
          },
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/ButtomIcon/Symbol.png')
                : require('../assets/ButtomIcon/Symbol.png');
            } else if (route.name === 'Weather') {
              iconName = focused
                ? require('../assets/ButtomIcon/Button.png')
                : require('../assets/ButtomIcon/Button.png');
            } else if (route.name === 'About') {
              iconName = focused
                ? require('../assets/ButtomIcon/About.png')
                : require('../assets/ButtomIcon/About.png');
            } 
            

            if (focused) {
              return (
                <View style={styles.iconContainer}>
                  
                  <Image source={iconName} style={styles.iconImage}  />
                  <Image source={require('../assets/ButtomIcon/Subtract.png')} style={styles.subtractImage} element={{display:"none"}}  />
                  <ImageBackground source={require('../assets/ButtomIcon/Rectangle.png')} style={styles.subtractImage} element={{display:"none"}}  />
                </View>
              );
            } else {
              return (
                <Image source={iconName} style={{width: 35, height: 35}} />
              );
            }
            
          },
          // tabBarLabel: ({focused}) => {
          //   const labelStyle = {
          //     fontSize: focused ? 16 : 13,
          //     color: focused ? 'orange' : 'gray',
          //   };

          //   return <Text style={labelStyle}>{route.name}</Text>;
          // },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Weather"
          component={WeatherView}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="About"
          component={AboutView}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashView"
          component={SplashView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative', // Untuk memungkinkan penggunaan 'position: absolute' pada anak-anak
    flexDirection: 'row', // Untuk menyusun gambar dan teks secara horizontal
    alignItems: 'center', // Untuk mengatur vertikal ke tengah
  },
  iconImage: {
    width: 45,
    height: 45,
  },
  subtractImage: {
    position: 'absolute', // Membuat gambar "Subtract" menjadi latar belakang
    // width: 50, // Sesuaikan lebar gambar subtract sesuai kebutuhan Anda
    // height: 50, // Sesuaikan tinggi gambar subtract sesuai kebutuhan Anda
    resizeMode:"contain",
    zIndex: -1, // Mengatur z-index agar lebih rendah dari ikon nama
    marginLeft: -110,
 
  },
});

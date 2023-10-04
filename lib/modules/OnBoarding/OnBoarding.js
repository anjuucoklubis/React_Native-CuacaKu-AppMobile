import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Animated,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import OnBoardingItem from './OnBoardingItem';
import slides from './OnBoardingModel';
import Paginator from './Paginator';
import {useNavigation} from '@react-navigation/native';
export default OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation()

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const GoHome = () => {
    navigation.navigate('MainApp')
  }

  function Buttonn() {
    return (
      <TouchableOpacity onPress={GoHome}>
        <View>
          <Text style={styles.text}>Go Home</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const SKIP = () => {
    if (currentIndex === slides.length - 1) {
      return <Buttonn />;
    } else {
      return <Buttonn />;
    }
  };

  return (
    <View style={{flex: 3}}>
      <ImageBackground
        source={require('../../assets/Image.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <StatusBar hidden />

        <FlatList
          data={slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          viewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator data={slides} scrollX={scrollX} />

        <SKIP />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
    top: -20,
    alignSelf: 'flex-end',
    right: 10,
    fontFamily: 'FiraSans-Medium',
  },
});

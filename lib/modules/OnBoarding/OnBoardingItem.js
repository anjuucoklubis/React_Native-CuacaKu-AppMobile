import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';


export default OnBoardingItem = ({item}) => {
    const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, ]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />

      <View style={{top: 0, padding: 10}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 60,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'FiraSans-Medium',
    textAlign:"left"
  },
  desc: {
    color: 'white',
    textAlign: 'left',
    fontFamily: 'FiraSans-Medium',
    fontSize: 23,
    textAlign:"left",
 
    alignItems:"flex-start"
    


  },
});

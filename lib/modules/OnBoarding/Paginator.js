import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';

export default Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
  
      <View style={{flexDirection: 'row', height: 0, left: 150, top: -50}}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[styles.dot, {width: dotWidth, opacity}]}
              key={i.toString()}
            />
          );
        })}
  
      </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
  },
});
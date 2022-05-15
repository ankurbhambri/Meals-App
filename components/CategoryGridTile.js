import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const CategoryGridTile = props => {
  // let TouchableCmp = TouchableOpacity
  // if (Platform.OS === 'android' & Platform.Version >= 21) {
  //     TouchableCmp = TouchableNativeFeedback
  // }
  return (
    <View style={styles.gridItem}>
      {/* style={{flex: 1}} onPress={props.onSelect} */}
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onSelect}>
        <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 10,
    // elevation: 3,
  },
  title: {
    // fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 18,
    // textAlign: 'right'
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
});

export default CategoryGridTile;

import React from 'react';
import {View, StyleSheet, Text, Pressable, Platform, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();
  const mealDetail = {
    duration: duration,
    complexity: complexity,
    affordability: affordability,
  };
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.bgImage} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.mealDetails}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#E6ECF4',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerContainer: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingVertical: 5,
    // paddingHorizontal: 12
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  bgImage: {
    width: '100%',
    height: 200,
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    height: '15%',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;

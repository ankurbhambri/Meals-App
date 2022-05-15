import React, {useLayoutEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {MEALS} from '../data/dummy-data';
import List from '../components/MealDetail/List';

function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function headerButtonHandler() {
    console.log('Pressed !!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <CustomHeaderButton
            icon="star"
            color="white"
            onSelect={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  const mealDetail = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };

  return (
    <ScrollView style={styles.marginBottom}>
      <Image style={styles.bgImage} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails {...mealDetail} textStyle={styles.detailText} />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  bgImage: {
    width: '100%',
    height: 350,
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuter: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;

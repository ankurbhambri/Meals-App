import React, {useEffect, useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {StyleSheet, View, FlatList} from 'react-native';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function rendeMealItem(itemData) {
    const item = itemData.item;
    const mealItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemsProps} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={rendeMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsOverviewScreen;

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';
// import CategoryMealsScreen from './screens/CategoryMealsScreen';

const CategoriesScreen = props => {
  const renderCategoryItem = itemData => {
    function pressHandler() {
      props.navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
      // {
      // routeName: 'MealsOverview',
      // params: {
      //     categoryId: itemData.item.id
      // }
      // });
    }

    return (
      // To render all data style is written in this file
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>CategoriesScreen</Text>
    //     <Button title='Go to meals' onPress={() => {
    //        props.navigation.navigate({routeName: 'CategoryMeals'})
    //        props.navigation.replace({routeName: 'CategoryMeals'})
    //       props.navigation.push('Categories')
    //     }}/>
    // </View>
  );
};

// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories'
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;

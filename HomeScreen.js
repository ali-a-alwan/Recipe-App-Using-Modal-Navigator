import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const recipes = [
  {
    title: 'Pasta Carbonara',
    ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan cheese', 'Garlic', 'Salt', 'Pepper'],
    instructions: '1. Cook spaghetti according to package instructions.\n2. In a skillet, cook bacon until crispy.\n3. In a bowl, whisk together eggs, Parmesan cheese, salt, and pepper.\n4. Toss cooked spaghetti with bacon and egg mixture. Serve immediately.'
  },
  {
    title: 'Chicken Stir-Fry',
    ingredients: ['Chicken breast', 'Vegetables (bell peppers, broccoli, carrots)', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame oil', 'Rice'],
    instructions: '1. Cut chicken breast into bite-sized pieces.\n2. Stir-fry chicken in a pan until cooked through.\n3. Add chopped vegetables and cook until tender-crisp.\n4. Stir in soy sauce, garlic, and ginger. Cook for another minute.\n5. Serve over cooked rice.'
  }
];

const HomeScreen = ({ navigation }) => {
  const navigateToRecipeDetails = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      {recipes.map(recipe => (
        <View key={recipe.title} style={styles.recipeItem}>
          <Text>{recipe.title}</Text>
          <Button title="View Details" onPress={() => navigateToRecipeDetails(recipe)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recipeItem: {
    marginBottom: 10,
  },
});

export default HomeScreen;

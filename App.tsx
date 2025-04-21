import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, View } from "react-native";
import { IFoodItem } from "./types/utils";
import ListItem from "./ListItem";

const date = new Date();

const FOOD_ITEMS: IFoodItem[] = [
  {
    id: 1,
    name: 'Caprese Pizza',
    amount: '$ 8',
    quantity: 2, 
    imageUrl: require("./assets/capresse-pizza.jpeg"),
    date
  },
  {
    id: 2,
    name: 'French Fries',
    amount: '$ 4',
    quantity: 1,
    imageUrl: require("./assets/french-fries.jpg"),
    date
  },
  {
    id: 4,
    name: 'Milk Shake',
    amount: '$ 5',
    quantity: 4,
    imageUrl: require("./assets/milkshake.jpeg"),
    date
  },
];

const renderItem = ({item}) => (
  <ListItem item={item} />
)

function App() {
  const [data, setData] = useState(FOOD_ITEMS);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})
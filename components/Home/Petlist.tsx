import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const data = [
  { id: "1", text: "Slide 1", image: require("../../assets/images/img1.webp") },
  { id: "2", text: "Slide 2", image: require("../../assets/images/img2.png") },
  { id: "3", text: "Slide 3", image: require("../../assets/images/img3.jpg") },
  { id: "4", text: "Slide 4", image: require("../../assets/images/img4.webp") },
];

const { height } = Dimensions.get("window");

export default function Petlist() {
  const [selectedItem, setSelectedItem] = useState("1");

  const renderItem = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => setSelectedItem(item.id)}>
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Petlist</Text>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
});

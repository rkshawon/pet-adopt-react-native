import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";

const data = [
  { id: "1", text: "Slide 1", image: require("../../assets/images/img1.webp") },
  {
    id: "10",
    text: "Slide 10",
    image: require("../../assets/images/img1.webp"),
  },
  // { id: "2", text: "Slide 2", image: require("../../assets/images/img2.png") },
  // { id: "3", text: "Slide 3", image: require("../../assets/images/img3.jpg") },
  // { id: "4", text: "Slide 4", image: require("../../assets/images/img4.webp") },
  // { id: "5", text: "Slide 5", image: require("../../assets/images/img2.png") },
  // { id: "6", text: "Slide 6", image: require("../../assets/images/img3.jpg") },
  // { id: "7", text: "Slide 7", image: require("../../assets/images/login.png") },
  // { id: "8", text: "Slide 8", image: require("../../assets/images/img1.webp") },
];

export default function Petlist() {
  const [selectedItem, setSelectedItem] = useState("1");

  const renderItem = ({ item }: any) => {
    console.log(item);
    return (
      <TouchableWithoutFeedback onPress={() => setSelectedItem(item.id)}>
        <View style={{ height: 500 }}>
          <Text>{item.text}</Text>
          <Image source={item.image} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Petlist</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: "100%",
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 500,
  },
});

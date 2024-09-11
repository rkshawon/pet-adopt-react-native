import React from "react";
import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

// Dummy data with image paths
const data = [
  { id: "1", text: "Slide 1", image: require("../../assets/images/login.png") },
  { id: "2", text: "Slide 2", image: require("../../assets/images/login.png") },
  { id: "3", text: "Slide 3", image: require("../../assets/images/login.png") },
  { id: "4", text: "Slide 4", image: require("../../assets/images/login.png") },
  { id: "5", text: "Slide 5", image: require("../../assets/images/login.png") },
];

export default function Slider() {
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("screen").width * 0.9,
    height: 170,
    borderRadius: 10,
    marginRight: 15,
  },
});

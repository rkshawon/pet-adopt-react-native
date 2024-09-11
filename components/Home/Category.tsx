import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const data = [
  { id: "1", text: "Slide 1", image: require("../../assets/images/img1.webp") },
  { id: "2", text: "Slide 2", image: require("../../assets/images/img2.png") },
  { id: "3", text: "Slide 3", image: require("../../assets/images/img3.jpg") },
  { id: "4", text: "Slide 4", image: require("../../assets/images/img4.webp") },
  { id: "5", text: "Slide 5", image: require("../../assets/images/img2.png") },
  { id: "6", text: "Slide 6", image: require("../../assets/images/img3.jpg") },
  { id: "7", text: "Slide 7", image: require("../../assets/images/login.png") },
  { id: "8", text: "Slide 8", image: require("../../assets/images/img1.webp") },
  { id: "9", text: "Slide 9", image: require("../../assets/images/img2.png") },
  { id: "0", text: "Slide 0", image: require("../../assets/images/img4.webp") },
];

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("1");

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontWeight: "500", fontSize: 20, marginBottom: 20 }}>
        Category
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item.id)}
            style={{ marginRight: 15 }}
          >
            <Image
              source={item.image}
              style={[
                styles.image,
                selectedCategory === item.id && styles.selectedItem,
              ]}
            />
            <Text
              style={[
                styles.text,
                selectedCategory === item.id && styles.selectedText,
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
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
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  selectedItem: {
    borderColor: "green",
    borderWidth: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 5,
    textAlign: "center",
  },
  selectedText: {
    color: "green",
  },
});

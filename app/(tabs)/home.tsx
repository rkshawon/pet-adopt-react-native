import { View, Text } from "react-native";
import Header from "../../components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import Petlist from "@/components/Home/Petlist";

export default function Home() {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Header />
      <Slider />
      <Category />
      <Petlist />
    </View>
  );
}

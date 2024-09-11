import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontWeight: 500, fontSize: 20 }}>Welcome,</Text>
        <Text style={{ fontWeight: 600, fontSize: 25 }}>Peter mach</Text>
      </View>
      <Image
        source={require("../../assets/images/login.png")}
        style={{
          height: 40,
          width: 40,
          borderRadius: 99,
        }}
      />
    </View>
  );
}

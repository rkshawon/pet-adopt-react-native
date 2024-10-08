import Colors from "@/constants/Colors";
import { Href, Link } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: "100%", height: 500, backgroundColor: Colors.WHITE }}
      />
      <View style={{ padding: 20, display: "flex", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make new friend
        </Text>
        <Text style={{ fontSize: 18, textAlign: "center", color: Colors.GRAY }}>
          Let's adopt the pet which you like and make their life again
        </Text>
        <Pressable
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: "100%",
            borderRadius: 14,
          }}
        >
          <Link
            href={"/(tabs)/home" as unknown as Href<string | object>}
            style={{ fontSize: 20, textAlign: "center" }}
          >
            <Text>Get Started</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        Aakif Ullah Khan
      </Text>
    </View>
  );
}

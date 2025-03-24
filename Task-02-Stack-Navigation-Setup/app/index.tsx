import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBtn from "@/components/customBtn";
import { router } from "expo-router";

const Home = () => {
  const handleonPress = () => {
    router.push("/chat");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
      <CustomBtn btnText="Go to Chat" onPress={handleonPress} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import CustomBtn from "@/components/customBtn";
import { router } from "expo-router";

const Home = () => {
  const chat = () => {
    router.push("/chat");
  };
  const profile = () => {
    router.push("/profile");
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <View className="w-full flex-col justify-between items-center gap-2">
        <CustomBtn btnText="Go to Chat" onPress={chat} />
        <CustomBtn btnText="Go to profile" onPress={profile} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

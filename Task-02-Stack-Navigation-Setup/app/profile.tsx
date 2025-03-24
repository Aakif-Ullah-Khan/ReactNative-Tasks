import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBtn from "@/components/customBtn";
import { router } from "expo-router";

const Profile = () => {
  const homebtn = () => {
    router.push("/");
  };
  const chat = () => {
    router.push("/chat");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
      <View className="w-full flex-col justify-between items-center gap-2">
        <CustomBtn btnText="Go to home" onPress={homebtn} />
        <CustomBtn btnText="Go to chat" onPress={chat} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

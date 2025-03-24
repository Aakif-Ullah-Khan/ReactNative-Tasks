import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomBtn from "@/components/customBtn";
import { router } from "expo-router";

const Chat = () => {
  const home = () => {
    router.push("/");
  };
  const profile = () => {
    router.push("/profile");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Chat</Text>
      <View className="w-full flex-col justify-between items-center gap-2">
        <CustomBtn btnText="Go to home" onPress={home} />
        <CustomBtn btnText="Go to profile" onPress={profile} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});

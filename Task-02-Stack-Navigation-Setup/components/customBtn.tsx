import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExternalPathString, Link, RelativePathString } from "expo-router";

type CustomBtnProps = {
  btnText?: string;
  onPress?: () => void;
};

const CustomBtn = ({
  btnText = "Click",
  onPress = () => {},
}: CustomBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-500 p-3 w-[90%] rounded-lg flex items-center justify-center "
    >
      <Text className="color-white">{btnText}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});

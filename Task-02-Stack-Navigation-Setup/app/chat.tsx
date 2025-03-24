import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Chat = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Chat</Text>
      <TouchableOpacity>
        <Text>Got to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});

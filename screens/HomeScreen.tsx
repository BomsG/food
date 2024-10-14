import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Offers from "../Component/Offers";

const HomeScreen = () => {
  return (
    <SafeAreaView className="mx-5">
      <View className="flex-row justify-between items-center mt-5">
        <MaterialCommunityIcons name="hamburger" size={25} color="black" />
        <View className="flex-row gap-2 items-center">
          <Entypo name="location-pin" size={25} color="red" />
          <Text className="text-[14px] tracking-wider">
            Freedom way, Lekki phase
          </Text>
        </View>
        <Image source={require("../assets/images/profille.png")} />
      </View>
      <View className="my-5 flex-row justify-start items-center bg-red-100 py-3 px-10">
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search" className="px-5 text-[16px]" />
      </View>
      <Offers />
    </SafeAreaView>
  );
};

export default HomeScreen;

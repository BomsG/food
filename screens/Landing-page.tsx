import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import pattern from "../assets/images/image.png";
import biker from "../assets/images/biker.png";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeColor } from "../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Landing">;

const LandingPage = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-row justify-center h-full items-center bg-red-200 ">
      <View>
        <Image
          source={require("../assets/images/motor.png")}
          className="w-[200px] h-[200px]"
        />
        <Text className="text-[40px] font-bold text-[#ff0000]">Food Runs</Text>
      </View>
    </View>
  );
};

export default LandingPage;

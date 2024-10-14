import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import offer1 from "../assets/images/discount.png";
import burger from "../assets/images/burger3.png";
import pizza from "../assets/images/burger3.png";
const Offers = () => {
  const offer = [
    {
      id: 1,
      img: offer1,
    },
    {
      id: 2,
      img: offer1,
    },
    {
      id: 3,
      img: offer1,
    },
    {
      id: 4,
      img: offer1,
    },
  ];

  const categories = [
    {
      id: 1,
      img: burger,
      txt: "Burger",
    },
    {
      id: 2,
      img: burger,
      txt: "Pizza",
    },
    {
      id: 3,
      img: pizza,
      txt: "Burger",
    },
    {
      id: 4,
      img: pizza,
      txt: "Burger",
    },
  ];
  return (
    <View className="">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-5">
        {offer.map((item) => (
          <Image source={item.img} key={item.id} />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        className="gap-2 my-3">
        {categories.map((item) => (
          <View
            className="bg-red-900 flex-row items-center gap-2 px-5"
            key={item.id}>
            <Image source={item.img} style={{ width: 45, height: 45 }} />
            <Text>{item.txt}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Offers;

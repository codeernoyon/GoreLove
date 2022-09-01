import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../assets/icons/coolicon.png";
import Img from "../assets/images/Ellipse1.png";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-[#f9f9f9]">
      {/*  Container */}
      <View className="px-4 pb-5">
        {/* header */}
        <View className="flex-row items-center py-4">
          <TouchableOpacity>
            <Image source={Icon} className="w-5" />
          </TouchableOpacity>
          <Text className="flex-1 text-center font-bold text-lg">
            Patient info
          </Text>
        </View>
        {/* Image */}
        <View className="justify-center flex-row mt-3">
          <View className="p-[2px] bg-white rounded-full border-[4px] border-[#ff9bbf]">
            <Image source={Img} style={{ width: 72 }} />
          </View>
        </View>
        {/*  Name */}
        <Text className="text-center font-[500] text-[18px] mt-4">
          Khalid Saifullah
        </Text>
        {/* Code */}
        <Text className="text-[14px] font-[400] text-center mt-3 text-[#f50057]">
          #4456
        </Text>
        {/* Description */}
        <Text className="text-center text-[13px] font-[400] mt-5">
          Student, 26 years old, with a history of congestive heart failure,
          coronary artery disease risk factors of hypertension and
          post-menopausal state.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

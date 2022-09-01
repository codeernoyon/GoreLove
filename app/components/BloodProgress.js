import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import * as Progress from 'react-native-progress';

const BloodProgress = ({ total, remaining }) => {
    return (
        <View style={[tw`relative justify-center items-center`, { width: 40 }]}>
            <Image
                style={tw`w-4 h-4 absolute -top-2 z-10`}
                source={require("../assets/icons/blood.png")}
                resizeMode="contain"
            />
            <Text style={tw`absolute text-[#DFDFDF] font-bold`}><Text style={tw`text-[#F40057]`}>2</Text>/4</Text>
            <Progress.Circle
                progress={remaining/total}
                size={50}
                borderWidth={0}
                color={"#F40057"}
                borderColor="#DFDFDF"
                unfilledColor="#DFDFDF"
                direction="counter-clockwise"
            />
        </View>
    );
}

export default BloodProgress;
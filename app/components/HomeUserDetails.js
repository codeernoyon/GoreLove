import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../configs/colors';

const HomeUserDetails = () => {
    return (
        <View style={tw`mx-5 bg-white p-6 rounded-2xl mb-13 relative`}>
            <Text style={tw`text-gray-500 text-xs`}>Your location</Text>
            <View style={tw`flex-row items-center mt-1 border-b border-gray-200 pb-3 mb-3`}>
                <View style={tw`flex-row items-center flex-1`}>
                    <Ionicons name="location-outline" size={25} color={COLORS.primary} />
                    <Text style={tw`text-[#3F3D56] text-lg font-bold w-5/6 ml-1`} numberOfLines={1}>Badda Dhaka, Bangladesh</Text>
                </View>
                <AntDesign name="edit" size={17} color={COLORS.gray} />
            </View>
            <View style={tw`flex-row`}>
                <View style={tw`w-1/2 pr-3`}>
                    <Text style={tw`text-gray-500 text-xs`}>Last donated</Text>
                    <View style={tw`flex-row items-center`}>
                        <Text style={tw`text-[#F50057] text-base font-bold mr-1`}>4 months ago</Text>
                        <AntDesign name="edit" size={12} color={COLORS.gray} />
                    </View>
                    <Text style={tw`text-gray-700 text-xs`}>You're available to donate</Text>
                </View>
                <View style={tw`w-1/2 pl-4 flex-row items-center border-l border-gray-300`}>
                    <Image
                        source={require("../assets/icons/blood_give.png")}
                        style={tw`w-7 h-7`}
                    />
                    <View style={tw`ml-3`}>
                        <Text style={tw`text-[#F50057] text-xl font-bold mr-1`}>0</Text>
                        <Text style={tw`text-gray-700 text-xs`}>Times donated</Text>
                    </View>
                </View>
            </View>
            <View style={tw`absolute -bottom-9 right-0 z-50`}>
                <Text style={tw`text-[#F50057] text-sm font-bold self-center absolute z-10 top-6`}>A+</Text>
                <Image
                    source={require("../assets/images/Blood_drop.png")}
                    style={tw`w-18 h-18`}
                    resizeMode={"contain"}
                />
            </View>
        </View>
    );
}

export default HomeUserDetails;
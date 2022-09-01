import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'

const HomeActionButtons = () => {
    return (
        <View style={tw`flex-wrap my-5 mt-10 flex-row justify-center`}>
            <TouchableOpacity style={tw`items-center bg-white rounded-xl p-4 m-2`}>
                <Image
                    source={require("../assets/icons/blood.png")}
                    style={tw`w-8 h-8`}
                    resizeMode="contain"
                />
                <Text style={tw`text-gray-600 text-xs font-medium text-center mt-2`}>Request blood</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`items-center bg-white rounded-xl p-4 m-2`}>
                <Image
                    source={require("../assets/images/search_blood.png")}
                    style={tw`w-8 h-8`}
                    resizeMode="contain"
                />
                <Text style={tw`text-gray-600 text-xs font-medium text-center mt-2`}>Find a donor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`items-center bg-white rounded-xl p-4 m-2`}>
                <Image
                    source={require("../assets/icons/donate.png")}
                    style={tw`w-8 h-8`}
                    resizeMode="contain"
                />
                <Text style={tw`text-gray-600 text-xs font-medium text-center mt-2`}>Request blood</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeActionButtons;
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../configs/colors';
import { BloodProgress } from './';

const BloodRequestCard = () => {
    return (
        <TouchableOpacity style={tw`bg-white p-5 rounded-xl mb-4 relative`}>
            <View style={tw`border-b border-gray-200 pb-3 mb-3`}>
                <Text style={tw`text-gray-700 text-base font-semibold mb-1`}>khalid Saifullah</Text>
                <Text style={tw`text-gray-500 text-xs`}>Reason: <Text style={tw`text-gray-700 font-semibold text-xs`}>Surgery</Text></Text>
            </View>
            <View style={tw`bg-[#F40057] w-12 h-12 rounded-tr-xl rounded-bl-xl absolute top-0 right-0 justify-center items-center`}>
                <Text style={tw`text-white font-semibold text-base`}>A+</Text>
            </View>
            <View style={tw`flex-row`}>
                <View style={tw`flex-1`}>
                    <View style={tw`flex-row items-center mb-1`}>
                        <Ionicons name="location-outline" size={17} color={COLORS.primary} />
                        <Text style={tw`text-gray-600 text-sm ml-1 w-5/6`} numberOfLines={1}>Badda Dhaka, Bangladesh</Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Ionicons name="timer-outline" size={17} color={COLORS.primary} />
                        <Text style={tw`text-gray-600 text-sm ml-1 font-semibold`} numberOfLines={1}>Within 4 hours <Text style={tw`text-[#F40057]`}>(urgent)</Text></Text>
                    </View>
                </View>
                <View>
                    <BloodProgress
                        remaining={2}
                        total={4}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default BloodRequestCard;
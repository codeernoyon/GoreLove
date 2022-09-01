import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../configs/colors';
import { BloodRequestCard } from './';

const HomeFeed = () => {
    return (
        <View style={[tw`mx-5`]}>
            <View style={tw`flex-row justify-between items-center mb-3`}>
                <Text style={tw`text-gray-700 font-bold text-lg`}>Blood Requests</Text>
                <AntDesign name="setting" size={22} color={COLORS.gray} />
            </View>
            <View>
                <BloodRequestCard />
                <BloodRequestCard />
                <BloodRequestCard />
                <BloodRequestCard />
            </View>
        </View>
    );
}

export default HomeFeed;
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import tw from 'twrnc';
import COLORS from '../configs/colors';
import {HomeUserDetails} from './';
const HomeHeader = () => {
  return (
    <LinearGradient
      colors={['#FDDFE4', '#FF689B']}
      style={styles.parent}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 1}}
      locations={[0, 1]}>
      <View style={styles.child}>
        <View style={tw`flex-row justify-between items-center px-5 py-2 mb-2`}>
          <TouchableOpacity>
            <Fontisto name="search" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/Logo.png')}
            style={tw`w-[30] h-[12]`}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/images/user.png')}
              style={tw`w-8 h-8 border border-gray-100 border-2 rounded-full`}
            />
          </TouchableOpacity>
        </View>
        <HomeUserDetails />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
    paddingTop: StatusBar.currentHeight,
    zIndex: 100,
  },
  child: {
    transform: [{scaleX: 0.5}],
  },
});

export default HomeHeader;

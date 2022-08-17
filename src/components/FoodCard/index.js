import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import tw from 'twrnc';

const FoodCard = ({imgSource, name, rating, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View
        style={tw.style(
          'w-[200px] bg-white rounded-[8px] overflow-hidden mr-[24px]',
          {
            shadowColor: '#FFC700', //android
            elevation: 14, //android
            shadowOffset: {
              width: 0,
              height: 7,
            }, //ios
            shadowOpacity: 0.5, //ios
            shadowRadius: 10, //ios
          },
        )}>
        <Image
          source={imgSource}
          style={tw.style('w-[200px] h-[140px]', {resizeMode: 'cover'})} //object-cover (object-fit: cover) | in react native it's called as resizeMode
        />
        <View style={tw.style('p-[12px]')}>
          <Text
            style={tw.style('text-[16px] text-[#020202]', {
              fontFamily: 'Poppins-Regular',
            })}>
            {name}
          </Text>
          <Rating number={rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

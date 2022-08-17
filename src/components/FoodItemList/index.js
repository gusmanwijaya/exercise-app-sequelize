import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import Number from '../Number';
import tw from 'twrnc';

const FoodItemList = ({
  imgSource,
  handlePress,
  rating,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'products':
        return (
          <>
            <View style={tw.style('flex-1')}>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {name}
              </Text>
              <Number number={price} />
            </View>
            <Rating number={rating} />
          </>
        );

      case 'order-summary':
        return (
          <>
            <View style={tw.style('flex-1')}>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {name}
              </Text>
              <Number number={price} />
            </View>
            <Text
              style={tw.style('text-[13px] text-[#8D92A3]', {
                fontFamily: 'Poppins-Regular',
              })}>
              {items} items
            </Text>
          </>
        );

      case 'in-progress':
        return (
          <>
            <View style={tw.style('flex-1')}>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {name}
              </Text>
              <View style={tw.style('flex-row items-center')}>
                <Text
                  style={tw.style('text-[13px] text-[#8D92A3]', {
                    fontFamily: 'Poppins-Regular',
                  })}>
                  {items} items
                </Text>
                <View
                  style={tw.style(
                    'w-[3px] h-[3px] rounded-[3px] mx-[4px] bg-[#8D92A3]',
                  )}
                />
                <Number number={price} />
              </View>
            </View>
            <View>
              <Text
                style={tw.style('text-[10px]', {
                  fontFamily: 'Poppins-Regular',
                  color:
                    status === 'cancel'
                      ? '#D9435E'
                      : status === 'pending'
                      ? '#FFC700'
                      : '#1ABC9C',
                })}>
                {status}
              </Text>
            </View>
          </>
        );

      case 'past-orders':
        return (
          <>
            <View style={tw.style('flex-1')}>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {name}
              </Text>
              <View style={tw.style('flex-row items-center')}>
                <Text
                  style={tw.style('text-[13px] text-[#8D92A3]', {
                    fontFamily: 'Poppins-Regular',
                  })}>
                  {items} items
                </Text>
                <View
                  style={tw.style(
                    'w-[3px] h-[3px] rounded-[3px] mx-[4px] bg-[#8D92A3]',
                  )}
                />
                <Number number={price} />
              </View>
            </View>
            <View>
              <Text
                style={tw.style('text-[10px] text-[#8D92A3]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {date}
              </Text>
              <Text
                style={tw.style('text-[10px]', {
                  fontFamily: 'Poppins-Regular',
                  color:
                    status === 'cancel'
                      ? '#D9435E'
                      : status === 'pending'
                      ? '#FFC700'
                      : '#1ABC9C',
                })}>
                {status}
              </Text>
            </View>
          </>
        );

      default:
        return (
          <>
            <View style={tw.style('flex-1')}>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                Title Item
              </Text>
              <Number number={0} />
            </View>
            <Rating number={0} />
          </>
        );
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={tw.style('flex-row bg-white py-[8px] items-center')}>
        <Image
          source={imgSource}
          style={tw.style(
            'w-[60px] h-[60px] rounded-[8px] overflow-hidden mr-[12px]',
          )}
        />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default FoodItemList;

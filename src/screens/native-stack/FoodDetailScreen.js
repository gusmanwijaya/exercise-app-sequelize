import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import FoodDummy5 from '../../assets/Dummy/food-dummy5.png';
import IconBackWhite from '../../assets/Icon/ic-back-white.svg';
import Counter from '../../components/Counter';
import Rating from '../../components/Rating';
import Number from '../../components/Number';
import Button from '../../components/Button';

const FoodDetailScreen = () => {
  const navigation = useNavigation();

  const [totalItem, setTotalItem] = useState(1);

  const handleValueChange = value => {
    setTotalItem(value);
  };

  return (
    <View style={tw.style('flex-1')}>
      <ImageBackground
        source={FoodDummy5}
        style={tw.style('h-[330px] android:pt-[26px] ios:pt-[52px] pl-[22px]')}>
        <TouchableOpacity
          style={tw.style('w-[30px] h-[30px] justify-center items-center')}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={tw.style(
          'bg-white rounded-tl-[40px] rounded-tr-[40px] mt-[-40px] pt-[26px] px-[16px] flex-1 ios:pb-[10px]',
        )}>
        <View style={tw.style('flex-1')}>
          <View
            style={tw.style('flex-row justify-between items-center mb-[14px]')}>
            <View>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                Bakso
              </Text>
              <Rating number={3.5} />
            </View>
            <Counter handleValueChange={handleValueChange} />
          </View>
          <Text
            style={tw.style('text-[14px] text-[#8D92A3] mb-[16px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            facere dolorum aliquam, rem nostrum laudantium quae saepe corporis
            error debitis. Sit natus fugit facilis odit tenetur officia nostrum,
            repellat voluptates!
          </Text>
          <Text
            style={tw.style('text-[14px] text-[#020202] mb-[4px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Ingredient :
          </Text>
          <Text
            style={tw.style('text-[14px] text-[#8D92A3] mb-[16px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Daging, Tepung, Bawang
          </Text>
        </View>
        <View style={tw.style('flex-row items-center py-[16px]')}>
          <View style={tw.style('flex-1')}>
            <Text
              style={tw.style('text-[13px] text-[#8D92A3]', {
                fontFamily: 'Poppins-Regular',
              })}>
              Total price :
            </Text>
            <Number number={30000} />
          </View>
          <View style={tw.style('w-[163px]')}>
            <Button
              text="Order Now"
              color="#FFC700"
              textColor="#020202"
              handlePress={() => navigation.navigate('OrderSummaryScreen')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetailScreen;

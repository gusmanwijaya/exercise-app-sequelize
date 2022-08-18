import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ProfileItemList from '../../../components/ProfileItemList';

const FoodMarketRoute = () => {
  return (
    <View style={tw.style('pt-[8px] px-[24px]')}>
      <ProfileItemList text="Rate App" />
      <ProfileItemList text="Help Center" />
      <ProfileItemList text="Privacy & Policy" />
      <ProfileItemList text="Term & Conditions" />
    </View>
  );
};

export default FoodMarketRoute;

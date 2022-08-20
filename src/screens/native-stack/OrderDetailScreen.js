import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import FoodDummy5 from '../../assets/Dummy/food-dummy5.png';
import FoodItemList from '../../components/FoodItemList';
import ItemValue from '../../components/ItemValue';
import Button from '../../components/Button';
import Gap from '../../components/Gap';

const OrderDetailScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  return (
    <View style={tw.style('flex-1')}>
      <Header
        title="Order Detail"
        subTitle="You deserve better meal"
        handleBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw.style('ios:pb-[10px]')}>
        <View style={tw.style('bg-white px-[24px] py-[16px] mt-[20px]')}>
          <Text
            style={tw.style('text-[14px] text-[#020202] my-[8px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Item Ordered
          </Text>
          <FoodItemList
            type="order-summary"
            name="Bakso"
            price={15000}
            items={3}
            imgSource={FoodDummy5}
          />
          <Text
            style={tw.style('text-[14px] text-[#020202] my-[8px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Detail Transaction
          </Text>
          <ItemValue label="Bakso" value={15000} type="currency" />
          <Gap height={6} />
          <ItemValue label="Driver" value={5000} type="currency" />
          <Gap height={6} />
          <ItemValue label="Tax 10%" value={2000} type="currency" />
          <Gap height={6} />
          <ItemValue
            label="Total Price"
            value={`IDR ${22000}`}
            color="#1ABC9C"
          />
        </View>
        <View style={tw.style('bg-white px-[24px] py-[16px] mt-[24px]')}>
          <Text
            style={tw.style('text-[14px] text-[#020202] my-[8px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Deliver to:
          </Text>
          <ItemValue label="Name" value="Gusman Wijaya, S.Kom" />
          <Gap height={6} />
          <ItemValue label="Phone No." value="081312121313" />
          <Gap height={6} />
          <ItemValue label="Address" value="Jl. Cendrawasih" />
          <Gap height={6} />
          <ItemValue label="House No." value="11" />
          <Gap height={6} />
          <ItemValue label="City" value="Bengkulu" />
        </View>
        <View style={tw.style('bg-white px-[24px] py-[16px] mt-[24px]')}>
          <Text
            style={tw.style('text-[14px] text-[#020202] my-[8px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Order Status
          </Text>
          <ItemValue label="#TRX-20939" value="Paid" color="#1ABC9C" />
        </View>
        <View style={tw.style('px-[24px] mt-[24px]')}>
          <Button text="Cancel My Order" color="#D9435E" textColor="white" />
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default OrderDetailScreen;

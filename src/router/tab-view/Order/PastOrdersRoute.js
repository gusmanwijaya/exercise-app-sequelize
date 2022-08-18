import {RefreshControl, ScrollView, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy2 from '../../../assets/Dummy/food-dummy2.png';

const PastOrdersRoute = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={tw.style('px-[24px] pt-[8px]')}>
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy2}
          items={5}
          type="past-orders"
          handlePress={() => navigation.navigate('OrderDetailScreen')}
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy2}
          items={5}
          type="past-orders"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy2}
          items={5}
          type="past-orders"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy2}
          items={5}
          type="past-orders"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy2}
          items={5}
          type="past-orders"
        />
      </View>
    </ScrollView>
  );
};

export default PastOrdersRoute;

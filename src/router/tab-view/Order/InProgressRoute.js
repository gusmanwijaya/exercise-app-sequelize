import {RefreshControl, ScrollView, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy1 from '../../../assets/Dummy/food-dummy1.png';

const InProgressRoute = () => {
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
          imgSource={FoodDummy1}
          items={3}
          type="in-progress"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy1}
          items={3}
          type="in-progress"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy1}
          items={3}
          type="in-progress"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy1}
          items={3}
          type="in-progress"
        />
        <FoodItemList
          name={'Cherry Healthy'}
          price={10000}
          rating={3.5}
          imgSource={FoodDummy1}
          items={3}
          type="in-progress"
        />
      </View>
    </ScrollView>
  );
};

export default InProgressRoute;

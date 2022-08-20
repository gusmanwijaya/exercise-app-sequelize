import {RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy2 from '../../../assets/Dummy/food-dummy2.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFoodByTypes} from '../../../redux/food/actions';
import {HOST_API} from '../../../configs/hostApi';

const PopularRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const {foodByTypes} = useSelector(state => state.foodReducers);

  useEffect(() => {
    dispatch(fetchFoodByTypes('popular'));
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(fetchFoodByTypes('popular'));
    }, 500);
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={tw.style('px-[24px] pt-[8px]')}>
        {foodByTypes?.popular.length > 0 ? (
          foodByTypes?.popular.map((value, index) => (
            <FoodItemList
              key={index}
              name={value?.name}
              price={value?.price}
              rating={value?.rate}
              imgSource={
                value?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${value?.picturePath}`}
                  : FoodDummy2
              }
              type="products"
              handlePress={() =>
                navigation.navigate('FoodDetailScreen', {id: value?.id})
              }
            />
          ))
        ) : (
          <Text style={tw.style('text-center pt-[130px] text-[#8D92A3]')}>
            Produk popular belum tersedia
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PopularRoute;

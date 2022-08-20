import {RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy3 from '../../../assets/Dummy/food-dummy3.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFoodByTypes} from '../../../redux/food/actions';
import {HOST_API} from '../../../configs/hostApi';

const RecommendedRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const {foodByTypes} = useSelector(state => state.foodReducers);

  useEffect(() => {
    dispatch(fetchFoodByTypes('recommended'));
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(fetchFoodByTypes('recommended'));
    }, 500);
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={tw.style('px-[24px] pt-[8px]')}>
        {foodByTypes?.recommended.length > 0 ? (
          foodByTypes?.recommended.map((value, index) => (
            <FoodItemList
              key={index}
              name={value?.name}
              price={value?.price}
              rating={value?.rate}
              imgSource={
                value?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${value?.picturePath}`}
                  : FoodDummy3
              }
              type="products"
              handlePress={() =>
                navigation.navigate('FoodDetailScreen', {id: value?.id})
              }
            />
          ))
        ) : (
          <Text style={tw.style('text-center pt-[130px] text-[#8D92A3]')}>
            Produk recommended belum tersedia
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default RecommendedRoute;

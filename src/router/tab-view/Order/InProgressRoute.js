import {RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy1 from '../../../assets/Dummy/food-dummy1.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactionByStatus} from '../../../redux/transaction/actions';
import {HOST_API} from '../../../configs/hostApi';

const InProgressRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const {transactionByStatus} = useSelector(state => state.transactionReducers);

  useEffect(() => {
    dispatch(fetchTransactionByStatus('pending'));
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchTransactionByStatus('pending'));
      setRefreshing(false);
    }, 500);
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={tw.style('px-[24px] pt-[8px]')}>
        {transactionByStatus?.pending.length > 0 ? (
          transactionByStatus?.pending.map((value, index) => (
            <FoodItemList
              key={index}
              name={value?.food?.name}
              price={value?.food?.price}
              rating={value?.food?.rate}
              imgSource={
                value?.food?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${value?.food?.picturePath}`}
                  : FoodDummy1
              }
              items={value?.quantity}
              type="in-progress"
              handlePress={() =>
                navigation.navigate('OrderDetailScreen', {id: value?.id})
              }
            />
          ))
        ) : (
          <Text style={tw.style('text-center pt-[130px] text-[#8D92A3]')}>
            Transaksi in progress belum tersedia
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default InProgressRoute;

import {RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import FoodItemList from '../../../components/FoodItemList';
import FoodDummy2 from '../../../assets/Dummy/food-dummy2.png';
import {fetchTransactionByStatus} from '../../../redux/transaction/actions';
import {useDispatch, useSelector} from 'react-redux';
import {HOST_API} from '../../../configs/hostApi';

const PastOrdersRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const {transactionByStatus} = useSelector(state => state.transactionReducers);

  useEffect(() => {
    dispatch(fetchTransactionByStatus('cancel'));
    dispatch(fetchTransactionByStatus('settlement'));
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchTransactionByStatus('cancel'));
      dispatch(fetchTransactionByStatus('settlement'));
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
        {transactionByStatus?.settlement.length > 0 &&
          transactionByStatus?.settlement.map((value, index) => (
            <FoodItemList
              key={index}
              name={value?.food?.name}
              price={value?.food?.price}
              rating={value?.food?.rate}
              imgSource={
                value?.food?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${value?.food?.picturePath}`}
                  : FoodDummy2
              }
              items={value?.quantity}
              type="in-progress"
              handlePress={() =>
                navigation.navigate('OrderDetailScreen', {id: value?.id})
              }
            />
          ))}

        {transactionByStatus?.cancel.length > 0 ? (
          transactionByStatus?.cancel.map((value, index) => (
            <FoodItemList
              key={index}
              name={value?.food?.name}
              price={value?.food?.price}
              rating={value?.food?.rate}
              imgSource={
                value?.food?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${value?.food?.picturePath}`}
                  : FoodDummy2
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
            Transaksi past orders belum tersedia
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PastOrdersRoute;

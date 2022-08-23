import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import OrderEmptyIllustration from '../../assets/Ilustration/EmptyOrder.svg';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import Header from '../../components/Header';
import OrderTabView from '../tab-view/Order';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTransaction,
  fetchTransactionByStatus,
} from '../../redux/transaction/actions';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data} = useSelector(state => state.transactionReducers);

  useEffect(() => {
    dispatch(fetchTransaction());
    dispatch(fetchTransactionByStatus('pending'));
    dispatch(fetchTransactionByStatus('cancel'));
    dispatch(fetchTransactionByStatus('settlement'));
  }, [dispatch]);

  return data.length > 0 ? (
    <View style={tw.style('flex-1')}>
      <View style={tw.style('flex-1')}>
        <Header title="Your Orders" subTitle="Wait for the best meal" />
        <View style={tw.style('flex-1 mt-[24px]')}>
          <OrderTabView />
        </View>
      </View>
    </View>
  ) : (
    <View style={tw.style('flex-1 justify-center items-center bg-white')}>
      <View style={tw.style('w-[200px] h-[222px]')}>
        <OrderEmptyIllustration />
      </View>
      <Gap height={30} />
      <Text
        style={tw.style('text-[20px] text-[#020202] text-center', {
          fontFamily: 'Poppins-Regular',
        })}>
        Ouch! Hungry
      </Text>
      <Gap height={6} />
      <View style={tw.style('px-[96px]')}>
        <Text
          style={tw.style('text-[14px] text-[#8D92A3] text-center', {
            fontFamily: 'Poppins-Light',
          })}>
          Seems like you have not ordered any food yet
        </Text>
      </View>
      <Gap height={30} />
      <View style={tw.style('w-full ios:px-23 android:px-25')}>
        <Button
          text="Find Foods"
          color="#FFC700"
          textColor="#020202"
          handlePress={() =>
            navigation.replace('ContentTabs', {screen: 'HomeScreen'})
          }
        />
      </View>
    </View>
  );
};

export default OrderScreen;

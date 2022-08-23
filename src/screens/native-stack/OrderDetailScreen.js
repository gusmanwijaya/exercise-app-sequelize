import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import FoodDummy5 from '../../assets/Dummy/food-dummy5.png';
import FoodItemList from '../../components/FoodItemList';
import ItemValue from '../../components/ItemValue';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import {fetchDetailTransaction} from '../../redux/transaction/actions';
import {useDispatch, useSelector} from 'react-redux';
import {HOST_API} from '../../configs/hostApi';
import {cancelTransaction} from '../../services/transaction';
import {toast} from '../../utils/toast';
import {Root, Popup} from 'react-native-popup-confirm-toast';

const OrderDetailScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {params} = useRoute();

  const {detail} = useSelector(state => state.transactionReducers);

  const handleCancelOrder = () => {
    Popup.show({
      type: 'confirm',
      title: 'Cancel Transaction',
      textBody: 'Apakah kamu yakin ingin membatalkan transaksi?',
      buttonText: 'Iya',
      confirmText: 'Tidak',
      callback: async () => {
        const data = {
          order_id: detail?.order_id,
        };
        const response = await cancelTransaction(data);
        if (response?.data?.statusCode === 200) {
          toast(
            response?.data?.message ||
              'Terjadi kesalahan pada API cancel transaction Midtrans',
            'success',
          );
          setTimeout(() => {
            dispatch(fetchDetailTransaction(params?.id));
          }, 5000);
        } else {
          toast(
            response?.data?.message ||
              'Terjadi kesalahan pada API cancel transaction Midtrans',
            'danger',
          );
        }
        Popup.hide();
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };

  useEffect(() => {
    dispatch(fetchDetailTransaction(params?.id));
  }, [dispatch, params?.id]);

  return (
    <Root>
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
              name={detail?.food?.name}
              price={detail?.food?.price}
              items={detail?.quantity}
              imgSource={
                detail?.food?.picturePath
                  ? {uri: `${HOST_API.imageFoods}/${detail?.food?.picturePath}`}
                  : FoodDummy5
              }
            />
            <Text
              style={tw.style('text-[14px] text-[#020202] my-[8px]', {
                fontFamily: 'Poppins-Regular',
              })}>
              Detail Transaction
            </Text>
            <ItemValue
              label={`${detail?.food?.name} x ${detail?.quantity}`}
              value={detail?.total}
              type="currency"
            />
            <Gap height={6} />
            <ItemValue
              label="Total Price"
              value={`IDR ${detail?.total}`}
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
            <ItemValue label="Name" value={detail?.user?.name} />
            <Gap height={6} />
            <ItemValue label="Phone No." value={detail?.user?.phoneNumber} />
            <Gap height={6} />
            <ItemValue label="Address" value={detail?.user?.address} />
            <Gap height={6} />
            <ItemValue label="House No." value={detail?.user?.houseNumber} />
            <Gap height={6} />
            <ItemValue label="City" value={detail?.user?.city} />
          </View>
          <View style={tw.style('bg-white px-[24px] py-[16px] mt-[24px]')}>
            <Text
              style={tw.style('text-[14px] text-[#020202] my-[8px]', {
                fontFamily: 'Poppins-Regular',
              })}>
              Order Status
            </Text>
            <ItemValue
              label="#TRX-20939"
              value={detail?.status}
              color={
                detail?.status === 'settlement'
                  ? '#1ABC9C'
                  : detail?.status === 'pending'
                  ? '#FFC700'
                  : '#D9435E'
              }
            />
          </View>
          {detail?.status === 'pending' && (
            <View style={tw.style('px-[24px] mt-[24px]')}>
              <Button
                text="Cancel My Order"
                color="#D9435E"
                textColor="white"
                handlePress={handleCancelOrder}
              />
            </View>
          )}
          <Gap height={24} />
        </ScrollView>
      </View>
    </Root>
  );
};

export default OrderDetailScreen;

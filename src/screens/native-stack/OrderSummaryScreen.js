import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import FoodDummy5 from '../../assets/Dummy/food-dummy5.png';
import FoodItemList from '../../components/FoodItemList';
import ItemValue from '../../components/ItemValue';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import Loading from '../../components/Loading';
import {WebView} from 'react-native-webview';
import {postTransaction, destroyTransaction} from '../../services/transaction';
import {toast} from '../../utils/toast';

const OrderSummaryScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://gusmanwijaya.com');
  const [transactionId, setTransactionId] = useState(null);

  const handleNavigationStateChange = state => {
    const isStatusTransactionSuccess = state?.url
      .split('&')
      .includes('status_code=201');

    if (isStatusTransactionSuccess) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'SuccessOrderScreen',
          },
        ],
      });
    }
  };

  const handleBack = async () => {
    const response = await destroyTransaction(transactionId);
    if (response?.data?.statusCode === 200) {
      setIsPaymentOpen(false);
      toast('Transaksi Anda dibatalkan oleh sistem', 'danger');
    } else {
      toast(
        response?.data?.message || 'Terjadi kesalahan pada API Transaction',
        'danger',
      );
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          handleBack={handleBack}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={handleNavigationStateChange}
        />
      </>
    );
  }

  const handleCheckout = async () => {
    const requestBody = {
      food_id: params?.item?.id,
      quantity: params?.transaction?.totalItem,
    };

    const response = await postTransaction(requestBody);
    if (response?.data?.statusCode === 201) {
      setIsPaymentOpen(true);
      setPaymentURL(response?.data?.data?.payment_url);
      setTransactionId(response?.data?.data?.id);
    } else {
      toast(
        response?.data?.message || 'Terjadi kesalahan pada API transaction',
        'danger',
      );
    }
  };

  return (
    <View style={tw.style('flex-1')}>
      <Header
        title="Order Summary"
        subTitle="You deserve better meal"
        handleBack={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw.style('bg-white px-[24px] py-[16px] mt-[24px]')}>
          <Text
            style={tw.style('text-[14px] text-[#020202] my-[8px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            Item Ordered
          </Text>
          <FoodItemList
            type="order-summary"
            name={params?.item?.name}
            price={params?.item?.price}
            items={params?.transaction?.totalItem}
            imgSource={
              params?.item?.picturePath
                ? {uri: `${params?.item?.picturePath}`}
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
            label={`${params?.item?.name} x ${params?.transaction?.totalItem}`}
            value={params?.transaction?.totalPrice}
            type="currency"
          />
          <Gap height={6} />
          <ItemValue
            label="Driver"
            value={params?.transaction?.driver}
            type="currency"
          />
          <Gap height={6} />
          <ItemValue
            label="Tax 10%"
            value={params?.transaction?.tax}
            type="currency"
          />
          <Gap height={6} />
          <ItemValue
            label="Total Order"
            value={`IDR ${params?.transaction?.totalOrder}`}
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
          <ItemValue label="Name" value={params?.user?.name} />
          <Gap height={6} />
          <ItemValue label="Phone No." value={params?.user?.phoneNumber} />
          <Gap height={6} />
          <ItemValue label="Address" value={params?.user?.address} />
          <Gap height={6} />
          <ItemValue label="House No." value={params?.user?.houseNumber} />
          <Gap height={6} />
          <ItemValue label="City" value={params?.user?.city} />
        </View>
        <View style={tw.style('px-[24px] mt-[24px]')}>
          <Button
            text="Checkout Now"
            color="#FFC700"
            textColor="#020202"
            handlePress={handleCheckout}
          />
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default OrderSummaryScreen;

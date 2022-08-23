import {View, ScrollView, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import ProfileDummy from '../../assets/Dummy/profile-dummy.png';
import FoodDummy1 from '../../assets/Dummy/food-dummy1.png';
import Header from '../../components/Header';
import Gap from '../../components/Gap';
import FoodCard from '../../components/FoodCard';
import HomeTabView from '../tab-view/Home';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../../redux/profile/actions';
import {fetchFood, fetchFoodByTypes} from '../../redux/food/actions';
import {HOST_API} from '../../configs/hostApi';
import {getData, storeData} from '../../utils/asyncStorage';
import jwtDecode from 'jwt-decode';
import {fetchRefreshToken, setAccessToken} from '../../redux/session/actions';
import {getRefreshToken, getNewAccessToken} from '../../services/refresh-token';
import {toast} from '../../utils/toast';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data} = useSelector(state => state.profileReducers);
  const {food} = useSelector(state => state.foodReducers);

  const getNewAccessTokenWhenCloseToExpire = useCallback(async () => {
    const accessTokenLocalStorage = await getData('access-token');
    const decodeAccessTokenLocalStorage = jwtDecode(accessTokenLocalStorage);
    const user_id = decodeAccessTokenLocalStorage?.id;

    const responseGetRefreshToken = await getRefreshToken(user_id);
    if (responseGetRefreshToken?.data?.statusCode === 200) {
      const refresh_token = responseGetRefreshToken?.data?.data?.refresh_token;
      const dataRefreshToken = {
        refresh_token,
      };
      const responseNewAccessToken = await getNewAccessToken(dataRefreshToken);
      if (responseNewAccessToken?.data?.statusCode === 201) {
        const newAccessToken = responseNewAccessToken?.data?.data?.accessToken;
        dispatch(setAccessToken(newAccessToken));
        dispatch(fetchRefreshToken(user_id));
        storeData('access-token', newAccessToken);
      } else {
        toast(
          responseNewAccessToken?.data?.message ||
            'Terjadi kesalahan pada API new access token',
          'danger',
        );
      }
    } else {
      toast(
        responseGetRefreshToken?.data?.message ||
          'Terjadi kesalahan pada API get refresh token',
        'danger',
      );
    }
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => {
      getNewAccessTokenWhenCloseToExpire();
    }, 1000 * 60 * 8); //Ulangi setiap 8 menit
  }, [getNewAccessTokenWhenCloseToExpire]);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchFood());
    dispatch(fetchFoodByTypes('newTaste'));
    dispatch(fetchFoodByTypes('popular'));
    dispatch(fetchFoodByTypes('recommended'));
  }, [dispatch]);

  return (
    <View style={tw.style('flex-1')}>
      <Header
        title="Food Market"
        subTitle="Let's get some foods"
        imgSource={
          Object.keys(data).length > 0 && data?.picturePath
            ? {uri: `${HOST_API.imageUsers}/${data?.picturePath}`}
            : ProfileDummy
        }
      />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw.style('flex-row my-[24px]')}>
            <Gap width={24} />
            {food?.data.length > 0 ? (
              food?.data.map((value, index) => (
                <FoodCard
                  key={index}
                  imgSource={
                    value?.picturePath
                      ? {uri: `${HOST_API.imageFoods}/${value?.picturePath}`}
                      : FoodDummy1
                  }
                  name={value?.name || '-'}
                  rating={value?.rate || 0}
                  handlePress={() =>
                    navigation.navigate('FoodDetailScreen', {id: value?.id})
                  }
                />
              ))
            ) : (
              <Text
                style={tw.style(
                  'text-center text-[#8D92A3] android:ml-[30px] ios:ml-[15px]',
                )}>
                Oops, nampaknya belum ada produk yang dijual
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={tw.style('flex-1')}>
        <HomeTabView />
      </View>
    </View>
  );
};

export default HomeScreen;

import {View, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
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
import {fetchFood} from '../../redux/food/actions';
import {HOST_API} from '../../configs/hostApi';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data} = useSelector(state => state.profileReducers);
  const {food} = useSelector(state => state.foodReducers);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchFood());
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

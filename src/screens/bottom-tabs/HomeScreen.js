import {View, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ProfileDummy from '../../assets/Dummy/profile-dummy.png';
import FoodDummy1 from '../../assets/Dummy/food-dummy1.png';
import FoodDummy2 from '../../assets/Dummy/food-dummy2.png';
import FoodDummy3 from '../../assets/Dummy/food-dummy3.png';
import FoodDummy4 from '../../assets/Dummy/food-dummy4.png';
import FoodDummy5 from '../../assets/Dummy/food-dummy5.png';
import Header from '../../components/Header';
import Gap from '../../components/Gap';
import FoodCard from '../../components/FoodCard';
import HomeTabView from '../tab-view/Home';

const HomeScreen = () => {
  return (
    <View style={tw.style('flex-1')}>
      <Header
        imgSource={ProfileDummy}
        title="Food Market"
        subTitle="Let's get some foods"
      />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw.style('flex-row my-[24px]')}>
            <Gap width={24} />
            <FoodCard
              imgSource={FoodDummy1}
              name="Cherry Healthy"
              rating={3.5}
            />
            <FoodCard
              imgSource={FoodDummy2}
              name="Cherry Healthy"
              rating={2.5}
            />
            <FoodCard
              imgSource={FoodDummy3}
              name="Cherry Healthy"
              rating={4.5}
            />
            <FoodCard imgSource={FoodDummy4} name="Cherry Healthy" rating={4} />
            <FoodCard imgSource={FoodDummy5} name="Cherry Healthy" rating={2} />
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

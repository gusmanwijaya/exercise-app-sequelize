import {Text, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import tw from 'twrnc';
import AccountRoute from '../../../router/tab-view/Profile/AccountRoute';
import FoodMarketRoute from '../../../router/tab-view/Profile/FoodMarketRoute';

const renderScene = SceneMap({
  account: AccountRoute,
  foodMarket: FoodMarketRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={tw.style('h-[3px] bg-[#020202]')}
    style={tw.style('bg-white border-b border-b-[#F2F2F2]', {
      elevation: 0,
      shadowOpacity: 0,
    })}
    tabStyle={tw.style('w-auto')}
    renderLabel={({route, focused}) => (
      <Text
        style={tw.style(`${focused ? 'text-[#020202]' : 'text-[#8D92A3]'}`, {
          fontFamily: 'Poppins-Medium',
        })}>
        {route.title}
      </Text>
    )}
  />
);

const ProfileTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'account', title: 'Account'},
    {key: 'foodMarket', title: 'FoodMarket'},
  ]);

  const initialLayout = {
    width: layout.width,
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={tw.style('bg-white')}
    />
  );
};

export default ProfileTabView;

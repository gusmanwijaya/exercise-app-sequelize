import {Text, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import tw from 'twrnc';
import NewTasteRoute from '../../../router/tab-view/Home/NewTasteRoute';
import PopularRoute from '../../../router/tab-view/Home/PopularRoute';
import RecommendedRoute from '../../../router/tab-view/Home/RecommendedRoute';

const renderScene = SceneMap({
  newTaste: NewTasteRoute,
  popular: PopularRoute,
  recommended: RecommendedRoute,
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

const HomeTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'newTaste', title: 'New Taste'},
    {key: 'popular', title: 'Popular'},
    {key: 'recommended', title: 'Recommended'},
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

export default HomeTabView;

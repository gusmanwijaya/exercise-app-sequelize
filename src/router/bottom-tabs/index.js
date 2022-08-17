import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabBar';
import HomeScreen from '../../screens/bottom-tabs/HomeScreen';
import OrderScreen from '../../screens/bottom-tabs/OrderScreen';
import ProfileScreen from '../../screens/bottom-tabs/ProfileScreen';

const Tab = createBottomTabNavigator();

const ContentTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default ContentTabs;

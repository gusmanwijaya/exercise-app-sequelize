import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import IconHomeOn from '../../assets/Icon/ic-home-on.svg';
import IconHomeOff from '../../assets/Icon/ic-home-off.svg';
import IconOrderOn from '../../assets/Icon/ic-order-on.svg';
import IconOrderOff from '../../assets/Icon/ic-order-off.svg';
import IconProfileOn from '../../assets/Icon/ic-profile-on.svg';
import IconProfileOff from '../../assets/Icon/ic-profile-off.svg';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'HomeScreen':
      return focus ? <IconHomeOn /> : <IconHomeOff />;

    case 'OrderScreen':
      return focus ? <IconOrderOn /> : <IconOrderOff />;

    case 'ProfileScreen':
      return focus ? <IconProfileOn /> : <IconProfileOff />;

    default:
      return <IconHomeOn />;
  }
};

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={tw.style(
        'flex-row bg-white android:pb-[13px] ios:pb-[30px] pt-[15px] px-[50px] justify-between',
      )}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options?.tabBarAccessibilityLabel}
            testID={options?.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

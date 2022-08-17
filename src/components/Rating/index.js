import {View} from 'react-native';
import React from 'react';
import Number from '../Number';
import tw from 'twrnc';
import IconStarOn from '../../assets/Icon/ic-star-on.svg';
import IconStarOff from '../../assets/Icon/ic-star-off.svg';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];

    for (let index = 1; index <= 5; index++) {
      index <= number
        ? star.push(<IconStarOn key={index} />)
        : star.push(<IconStarOff key={index} />);
    }

    return star;
  };

  return (
    <View style={tw.style('flex-row')}>
      <View style={tw.style('flex-row mr-[4px]')}>{renderStar()}</View>
      <Number number={number} type="decimal" />
    </View>
  );
};

export default Rating;

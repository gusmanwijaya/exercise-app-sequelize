import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw.style('flex-1')}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={tw.style('bg-white px-[24px] py-[26px] mt-[24px] flex-1')}>
        <Input
          label="Email"
          placeholder="Type your email address"
          keyboardType="email-address"
          name="email"
        />
        <Gap height={16} />
        <Input
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          name="password"
        />
        <Gap height={24} />
        <Button
          color="#FFC700"
          textColor="#020202"
          text="Sign In"
          handlePress={() =>
            navigation.replace('ContentTabs', {
              screen: 'HomeScreen',
            })
          }
        />
        <Gap height={12} />
        <Button
          text="Sign Up"
          color="#8D92A3"
          textColor="white"
          handlePress={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={tw.style('grow')}
      showsVerticalScrollIndicator={false}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        handleBack={() => navigation.goBack()}
      />
      <View style={tw.style('flex-1 bg-white px-[24px] py-[26px] mt-[24px]')}>
        <View style={tw.style('items-center mt-[26px] mb-[16px]')}>
          <TouchableOpacity activeOpacity={0.7}>
            <View
              style={tw.style(
                'border border-[#8D92A3] w-[110px] h-[110px] rounded-[110px] justify-center items-center border-dashed',
              )}>
              <View
                style={tw.style(
                  'w-[90px] h-[90px] rounded-[90px] p-[24px] bg-[#F0F0F0]',
                )}>
                <Text
                  style={tw.style('text-[12px] text-center text-[#8D92A3]', {
                    fontFamily: 'Poppins-Light',
                  })}>
                  Add Photo
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Input
          label="Full Name"
          placeholder="Type your full name"
          name="name"
        />
        <Gap height={16} />
        <Input
          label="Email Address"
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
        <Gap height={16} />
        <Input
          label="Confirmation Password"
          placeholder="Type your confirmation password"
          secureTextEntry={true}
          name="confirmationPassword"
        />
        <Gap height={24} />
        <Button
          text="Continue"
          color="#FFC700"
          textColor="#020202"
          handlePress={() => navigation.navigate('SignUpAddressScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

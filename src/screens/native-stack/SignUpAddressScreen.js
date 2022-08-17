import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';

const SignUpAddressScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    city: '',
  });

  return (
    <ScrollView
      contentContainerStyle={tw.style('grow')}
      showsVerticalScrollIndicator={false}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        handleBack={() => navigation.goBack()}
      />
      <View style={tw.style('flex-1 bg-white px-[24px] py-[26px] mt-[24px]')}>
        <Input
          label="Phone No"
          placeholder="Type your phone number"
          keyboardType="phone-pad"
          name="phoneNumber"
        />
        <Gap height={16} />
        <Input label="Address" placeholder="Type your address" name="address" />
        <Gap height={16} />
        <Input
          label="House No"
          placeholder="Type your house number"
          keyboardType="number-pad"
          name="houseNumber"
        />
        <Gap height={16} />
        <SelectInput
          label="City"
          placeholder="Select your city"
          data={[
            'Seluma',
            'Manna',
            'Kaur',
            'Curup',
            'Lebong',
            'Muko-Muko',
            'Argamakmur',
          ]}
          name="city"
          setValueChange={value => setForm({...form, city: value})}
          selectedValue={form?.city}
        />
        <Gap height={24} />
        <Button
          color="#FFC700"
          textColor="#020202"
          text="Sign Up Now"
          handlePress={() =>
            navigation.replace('ContentTabs', {
              screen: 'HomeScreen',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default SignUpAddressScreen;

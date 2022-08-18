import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    city: 'Bengkulu',
  });

  return (
    <View style={tw.style('flex-1')}>
      <Header
        title="Edit Profile"
        subTitle="Please make your profile is valid"
        handleBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={tw.style(
          'mt-[24px] android:pb-[50px] ios:pb-[60px] bg-white pt-[24px] px-[24px]',
        )}
        showsVerticalScrollIndicator={false}>
        <Input
          label="Full Name"
          placeholder="Type your full name"
          name="name"
          value="Gusman Wijaya, S.Kom"
        />
        <Gap height={16} />
        <Input
          label="Email Address"
          placeholder="Type your email address"
          name="email"
          keyboardType="email-address"
          value="Gusman Wijaya, S.Kom"
        />
        <Gap height={16} />
        <Input
          label="Phone No"
          placeholder="Type your phone number"
          name="phoneNumber"
          keyboardType="phone-pad"
          value="081312131213"
        />
        <Gap height={16} />
        <Input
          label="Address"
          placeholder="Type your address"
          name="address"
          value="Jl. Cendrawasih No 11"
        />
        <Gap height={16} />
        <Input
          label="House No"
          placeholder="Type your house number"
          name="houseNumber"
          keyboardType="number-pad"
          value="081312131213"
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
            'Bengkulu',
          ]}
          name="city"
          setValueChange={value => setForm({...form, city: value})}
          selectedValue={form?.city}
        />
        <Gap height={24} />
        <Button
          color="#FFC700"
          textColor="#020202"
          text="Update Profile"
          handlePress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

import {View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../../redux/profile/actions';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data} = useSelector(state => state.profileReducers);

  const [form, setForm] = useState({
    name: data?.name,
    email: data?.email,
    phoneNumber: data?.phoneNumber,
    address: data?.address,
    houseNumber: data?.houseNumber,
    city: data?.city,
  });

  const handleUpdateProfile = async () => {};

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

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
          value={form?.name}
        />
        <Gap height={16} />
        <Input
          label="Email Address"
          placeholder="Type your email address"
          name="email"
          keyboardType="email-address"
          value={form?.email}
        />
        <Gap height={16} />
        <Input
          label="Phone No"
          placeholder="Type your phone number"
          name="phoneNumber"
          keyboardType="phone-pad"
          value={form?.phoneNumber}
        />
        <Gap height={16} />
        <Input
          label="Address"
          placeholder="Type your address"
          name="address"
          value={form?.address}
        />
        <Gap height={16} />
        <Input
          label="House No"
          placeholder="Type your house number"
          name="houseNumber"
          keyboardType="number-pad"
          value={form?.houseNumber}
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
          handlePress={handleUpdateProfile}
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

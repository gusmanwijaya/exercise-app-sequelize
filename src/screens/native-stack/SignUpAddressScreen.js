import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';
import {useNavigation, useRoute} from '@react-navigation/native';
import tw from 'twrnc';
import {toast} from '../../utils/toast';
import {signUp} from '../../services/auth';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/loading/actions';

const SignUpAddressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {params} = useRoute();

  const [form, setForm] = useState({
    name: params?.name,
    email: params?.email,
    password: params?.password,
    address: '',
    houseNumber: '',
    phoneNumber: '',
    city: '',
    pictureUri: params?.imageData?.uri,
    picturePath: {
      uri: params?.imageData?.uri,
      type: params?.imageData?.type,
      name: params?.imageData?.fileName,
    },
  });

  const handleSignUp = async () => {
    dispatch(setLoading(true));
    if (
      form?.address !== '' &&
      form?.houseNumber !== '' &&
      form?.phoneNumber !== '' &&
      form?.city !== ''
    ) {
      const formData = new FormData();
      formData.append('name', form?.name);
      formData.append('email', form?.email);
      formData.append('password', form?.password);
      formData.append('address', form?.address);
      formData.append('houseNumber', form?.houseNumber);
      formData.append('phoneNumber', form?.phoneNumber);
      formData.append('city', form?.city);
      formData.append('pictureUri', form?.pictureUri);
      formData.append('picturePath', form?.picturePath);

      const response = await signUp(true, formData);
      if (response?.data?.statusCode === 201) {
        dispatch(setLoading(false));
        toast(
          response?.data?.message || 'Akun anda berhasil didaftarkan',
          'success',
        );
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'SignInScreen',
            },
          ],
        });
      } else {
        dispatch(setLoading(false));
        toast(
          response?.data?.message || 'Terjadi kesalahan pada API sistem',
          'danger',
        );
      }
    } else {
      dispatch(setLoading(false));
      toast('Silahkan isi semua field yang tersedia', 'danger');
    }
  };

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
          onChangeText={value => setForm({...form, phoneNumber: value})}
        />
        <Gap height={16} />
        <Input
          label="Address"
          placeholder="Type your address"
          name="address"
          onChangeText={value => setForm({...form, address: value})}
        />
        <Gap height={16} />
        <Input
          label="House No"
          placeholder="Type your house number"
          keyboardType="number-pad"
          name="houseNumber"
          onChangeText={value => setForm({...form, houseNumber: value})}
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
          text="Sign Up Now"
          handlePress={handleSignUp}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpAddressScreen;

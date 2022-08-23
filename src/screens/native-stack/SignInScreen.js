import {View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import {storeData} from '../../utils/asyncStorage';
import {toast} from '../../utils/toast';
import {signIn} from '../../services/auth';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/loading/actions';
import {setAccessToken, fetchRefreshToken} from '../../redux/session/actions';
import jwtDecode from 'jwt-decode';

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    dispatch(setLoading(true));
    if (form?.email !== '' && form?.password !== '') {
      const response = await signIn(form);
      if (response?.data?.statusCode === 200) {
        dispatch(setLoading(false));

        storeData('access-token', response?.data?.data?.accessToken);
        dispatch(setAccessToken(response?.data?.data?.accessToken));
        const decodeAccessToken = jwtDecode(response?.data?.data?.accessToken);
        dispatch(fetchRefreshToken(decodeAccessToken?.id));

        navigation.replace('ContentTabs', {
          screen: 'HomeScreen',
        });
        toast(
          response?.data?.message || 'Berhasil sign in ke akun Anda',
          'success',
        );
      } else {
        dispatch(setLoading(false));
        toast(
          response?.data?.message || 'Terjadi kesalahan pada API sign in',
          'danger',
        );
      }
    } else {
      dispatch(setLoading(false));
      toast('Email atau password tidak boleh kosong', 'danger');
    }
  };

  return (
    <View style={tw.style('flex-1')}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={tw.style('bg-white px-[24px] py-[26px] mt-[24px] flex-1')}>
        <Input
          label="Email"
          placeholder="Type your email address"
          keyboardType="email-address"
          name="email"
          onChangeText={value => setForm({...form, email: value})}
        />
        <Gap height={16} />
        <Input
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          name="password"
          onChangeText={value => setForm({...form, password: value})}
        />
        <Gap height={24} />
        <Button
          color="#FFC700"
          textColor="#020202"
          text="Sign In"
          handlePress={handleSignIn}
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

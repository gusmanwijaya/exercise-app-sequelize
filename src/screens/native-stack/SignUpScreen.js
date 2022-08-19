import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import {toast} from '../../utils/toast';
import {launchImageLibrary} from 'react-native-image-picker';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [displayPhoto, setDisplayPhoto] = useState({
    uri: '',
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmationPassword: '',
    imageData: {},
  });

  const handleUploadPhoto = async () => {
    await launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          toast('Anda tidak memilih gambar', 'danger');
        } else {
          if (
            response?.assets[response?.assets.length - 1]?.fileSize >= 3000000
          ) {
            toast('Max ukuran gambar 3 Mb', 'danger');
          } else {
            setDisplayPhoto({
              ...displayPhoto,
              uri: response?.assets[response?.assets.length - 1]?.uri,
            });
            setForm({
              ...form,
              imageData: response?.assets[response?.assets.length - 1],
            });
          }
        }
      },
    );
  };

  const handleContinue = () => {
    if (
      form?.name !== '' &&
      form?.email !== '' &&
      form?.password !== '' &&
      form?.confirmationPassword !== ''
    ) {
      const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if (!pattern.test(form?.email)) {
        toast('Silahkan masukkan email yang valid', 'danger');
      } else {
        if (form?.password !== form?.confirmationPassword) {
          toast('Password dan konfirmasi password Anda tidak sama', 'danger');
        } else {
          navigation.navigate('SignUpAddressScreen', form);
        }
      }
    } else {
      toast('Silahkan isi semua field yang tersedia', 'danger');
    }
  };

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
          <TouchableOpacity activeOpacity={0.7} onPress={handleUploadPhoto}>
            <View
              style={tw.style(
                'border border-[#8D92A3] w-[110px] h-[110px] rounded-[110px] justify-center items-center border-dashed',
              )}>
              {displayPhoto?.uri !== '' ? (
                <Image
                  source={displayPhoto}
                  style={tw.style(
                    'w-[90px] h-[90px] rounded-[90px] p-[24px] bg-[#F0F0F0]',
                  )}
                />
              ) : (
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
              )}
            </View>
          </TouchableOpacity>
        </View>
        <Input
          label="Full Name"
          placeholder="Type your full name"
          name="name"
          onChangeText={value => setForm({...form, name: value})}
        />
        <Gap height={16} />
        <Input
          label="Email Address"
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
        <Gap height={16} />
        <Input
          label="Confirmation Password"
          placeholder="Type your confirmation password"
          secureTextEntry={true}
          name="confirmationPassword"
          onChangeText={value =>
            setForm({...form, confirmationPassword: value})
          }
        />
        <Gap height={24} />
        <Button
          text="Continue"
          color="#FFC700"
          textColor="#020202"
          handlePress={handleContinue}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

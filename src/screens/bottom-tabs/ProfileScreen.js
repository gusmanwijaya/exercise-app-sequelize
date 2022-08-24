import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import ProfileDummy from '../../assets/Dummy/profile-dummy.png';
import ProfileTabView from '../tab-view/Profile';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../../redux/profile/actions';
import {HOST_API} from '../../configs/hostApi';
import {launchImageLibrary} from 'react-native-image-picker';
import {toast} from '../../utils/toast';
import {updateProfile} from '../../services/profile';
import {setLoading} from '../../redux/loading/actions';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const {data} = useSelector(state => state.profileReducers);

  const handleUploadPhoto = async () => {
    dispatch(setLoading(true));

    await launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      async response => {
        if (response.didCancel || response.error) {
          dispatch(setLoading(false));
          toast('Anda tidak memilih gambar', 'danger');
        } else {
          if (
            response?.assets[response?.assets.length - 1]?.fileSize >= 3000000
          ) {
            dispatch(setLoading(false));
            toast('Max ukuran gambar 3 Mb', 'danger');
          } else {
            const picturePath = {
              uri: response?.assets[response?.assets.length - 1]?.uri,
              type: response?.assets[response?.assets.length - 1]?.type,
              name: response?.assets[response?.assets.length - 1]?.fileName,
            };
            const formData = new FormData();
            formData.append('name', data?.name);
            formData.append('email', data?.email);
            formData.append('address', data?.address);
            formData.append('houseNumber', data?.houseNumber);
            formData.append('phoneNumber', data?.phoneNumber);
            formData.append('city', data?.city);
            formData.append('picturePath', picturePath);

            const responseUpdateProfile = await updateProfile(true, formData);
            if (responseUpdateProfile?.data?.statusCode === 200) {
              dispatch(setLoading(false));
              dispatch(fetchProfile());
              toast(
                responseUpdateProfile?.data?.message ||
                  'Terjadi kesalahan pada API update profile',
                'success',
              );
            } else {
              toast(
                responseUpdateProfile?.data?.message ||
                  'Terjadi kesalahan pada API update profile',
                'danger',
              );
            }
          }
        }
      },
    );
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <View style={tw.style('flex-1')}>
      {/* START: Header Profile */}
      <View
        style={tw.style(
          'w-full android:h-[232px] ios:h-[260px] bg-white flex justify-center items-center',
        )}>
        <View
          style={tw.style(
            'android:mt-[26px] ios:mt-[80px] mb-[16px] items-center',
          )}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleUploadPhoto}>
            <View
              style={tw.style(
                'w-[110px] h-[110px] rounded-[110px] border border-dashed border-[#8D92A3] justify-center items-center',
              )}>
              <Image
                source={
                  data?.picturePath
                    ? {uri: `${HOST_API.imageUsers}/${data?.picturePath}`}
                    : ProfileDummy
                }
                style={tw.style(
                  'w-[90px] h-[90px] rounded-[90px] bg-[#F0F0F0] p-[24px]',
                )}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={tw.style('text-[18px] text-[#020202] mb-[6px]', {
            fontFamily: 'Poppins-Medium',
          })}>
          {data?.name}
        </Text>
        <Text
          style={tw.style(
            'text-[14px] text-[#8D92A3] android:mb-[26px] ios:mb-[52px]',
            {
              fontFamily: 'Poppins-Light',
            },
          )}>
          {data?.email}
        </Text>
      </View>
      {/* END: Header Profile */}
      <View
        style={tw.style('flex-1 mt-[24px] ios:mb-[270px] android:mb-[210px]')}>
        <ProfileTabView />
      </View>
    </View>
  );
};

export default ProfileScreen;

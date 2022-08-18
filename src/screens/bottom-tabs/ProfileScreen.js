import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ProfileDummy from '../../assets/Dummy/profile-dummy.png';
import ProfileTabView from '../tab-view/Profile';

const ProfileScreen = () => {
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
          <TouchableOpacity activeOpacity={0.7}>
            <View
              style={tw.style(
                'w-[110px] h-[110px] rounded-[110px] border border-dashed border-[#8D92A3] justify-center items-center',
              )}>
              <Image
                source={ProfileDummy}
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
          Gusman Wijaya, S.Kom
        </Text>
        <Text
          style={tw.style(
            'text-[14px] text-[#8D92A3] android:mb-[26px] ios:mb-[52px]',
            {
              fontFamily: 'Poppins-Light',
            },
          )}>
          gusman.w.jaya@gmail.com
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

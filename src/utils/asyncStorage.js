import AsyncStorage from '@react-native-async-storage/async-storage';
import {toast} from './toast';

const storeData = async (storageKey, value) => {
  try {
    return await AsyncStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    toast('Gagal menyimpan ke local storage', 'danger');
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    toast('Gagal mengambil data dari local storage', 'danger');
  }
};

export {storeData, getData};

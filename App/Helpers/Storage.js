import { AsyncStorage } from 'react-native';
import { apiWrapper } from './ApiWrapper';

const storeCustomData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Error Saving Data', error);
	}
};

const retrieveCustomData = async key => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return JSON.parse(value);
		}
		return null;
	} catch (error) {
		console.error('Error Retrieving Data', error);
		return null;
	}
};

const setAuthorization = async value => {
	try {
		await AsyncStorage.setItem('authorization', JSON.stringify(value));
	} catch (error) {
		console.error('Error Saving Data', error);
	}
};

const getAuthorization = async () => {
	try {
		const auth = await AsyncStorage.getItem('authorization');
		if (auth !== null) {
			return JSON.parse(auth);
		}
		return null;
	} catch (error) {
		console.error('Error Retrieving Data', error);
		return null;
	}
};

const removeAuthFromStorage = async () => {
	try {
		await AsyncStorage.removeItem('authorization');
		await AsyncStorage.removeItem('profile');
		return true;
	} catch (err) {
		console.error('Error while removing data', err);
		return false;
	}
};

const debugStorage = async () => {
	try {
		const datas = await AsyncStorage.getAllKeys();
		return datas;
	} catch (err) {
		console.error('Error while debug async storage', err);
	}
};

const setProfileFromRest = async () => {
	try {
		const profile = await apiWrapper.getMyProfile();
		await AsyncStorage.setItem('profile', JSON.stringify(profile));
		return profile;
	} catch (err) {
		console.log('something went wrong', err);
		return null;
	}
};

const getProfileFromStorage = async () => {
	try {
		const profile = await AsyncStorage.getItem('profile');
		if (profile !== null) {
			return JSON.parse(profile);
		}
		return null;
	} catch (error) {
		console.error('Error retrieving data', error);
		return null;
	}
};

const clearStorage = async () => {
	await AsyncStorage.clear();
};

const setLanguage = async (lang) => {
	try {
		await AsyncStorage.setItem('lang', lang);
		return lang;
	}
	catch (e) {
		console.error('Error retrieving language', e);
		return null;
	}
};

const getLanguage = async () => {
	try {
		const lang = await AsyncStorage.getItem('lang');
		if (lang !== null) {
			return lang;
		}
		return 'id';
	}
	catch (error) {
		console.error('Error retrieving language', error);
	}
};

export {
	storeCustomData,
	retrieveCustomData,
	setAuthorization,
	getAuthorization,
	debugStorage,
	setProfileFromRest,
	getProfileFromStorage,
	removeAuthFromStorage,
	clearStorage,
	setLanguage,
	getLanguage
};

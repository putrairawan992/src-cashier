import { Alert } from 'react-native';

const callAlert = errorValue => {
	setTimeout(() => {
		Alert.alert(null, Object.values(errorValue)[0], [{ text: 'OK' }], { cancelable: false });
	}, 200);
};

export default callAlert;

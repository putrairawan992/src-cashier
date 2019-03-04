/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Config } from '@constants';
import { getAuthorization, removeAuthFromStorage } from './Storage';
import serverValidation from './ServerValidation';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
    baseURL: Config.API_ENDPOINT
});

/**
 * Request Wrapper with default success/error actions
 */
const request = async options => {
    const token = await getAuthorization();
    options['headers'] = { 
        'Content-Type' : 'application/json'
    };
    if (token) {
        options['headers']['Authorization'] = 'Bearer ' + token.data.access_token;
    }
    console.log('check options', options);
    const onSuccess = response => {
        console.log('Request Successful!', response);
        return response.data;
    };

    const onError = error => {
        console.log('Request Failed:', error.response);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            // console.debug('Status:', error.response.status);
            // console.debug('Data:', error.response.data);
            // console.debug('Headers:', error.response.headers);
            // if validation error
            if (error.response.status === 422 && (error.config.method === 'post' || error.config.method === 'put')) {
                serverValidation(error.response.data.errors);
            }
            if (error.response.status === 401) {
                removeAuthFromStorage();
                Actions.Login({ type: 'reset' });
            }
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.debug('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;

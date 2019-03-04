import {
    GLOBAL_FETCH_PROFILE,
    GLOBAL_REFRESH_PROFILE,
    GLOBAL_REVOKE_PROFILE
} from './types';

export const fetchProfile = () => {
    return {
        type: GLOBAL_FETCH_PROFILE
    };
};

export const refreshProfile = () => {
    return {
        type: GLOBAL_REFRESH_PROFILE
    };
};

export const revokeProfile = () => {
    return {
       type: GLOBAL_REVOKE_PROFILE 
    };
};

import ACTION_TYPES from './apiTypes';

export const fetchData = () => ({
    type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = (data: any) => ({
    type: ACTION_TYPES.API_SUCCESS,
    payload: data,
});

export const fetchError = (error: any) => ({
    type: ACTION_TYPES.API_ERROR,
    payload: error,
});
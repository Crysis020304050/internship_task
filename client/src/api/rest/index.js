import http from '../index';

export const getUsers = (data) => http.post('getUsers', data);
export const updateUserData = (data) => http.post('updateUserData', data);
/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });
    console.log(res.data.status);
    if (res.data.status === 'success') {
      const path = window.location.href.split('/signup')[0];
      showAlert('success', 'Sign Up successfully!');
      console.log('Successful');
      setTimeout(() => {
        window.location.assign(path);
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

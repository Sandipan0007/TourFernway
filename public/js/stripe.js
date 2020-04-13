/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_6AjBzeyHizNzzQ3WpmBBzcyD00ilPbgxTE');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
    // } catch (err) {
  } catch (err) {
    console.log(err);
    // showAlert('error', err);
    showAlert(
      'success',
      'Booking Done! All necessary information has been mailed to you.'
    );
  }
};

const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  authController.isLoggedIn,
  authController.isSignupIn,
  viewsController.getOverview
);
router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  authController.isSignupIn,
  viewsController.getTour
);
// router.get(
//   '/tour/:slug',
//   authController.isLoggedIn,
//   authController.isSignupIn,
//   viewsController.getTour
// );

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isSignupIn, viewsController.getSignupForm);

// router.get(
//   '/forgotPassword',
//   authController.isResetPasswordIn,
//   viewsController.getResetPasswordForm
// );

// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
// router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get(
  '/my-tours',
  bookingController.createBookingCheckout,
  authController.protect,
  viewsController.getMyTours
);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;

//authController.isSignupIn,

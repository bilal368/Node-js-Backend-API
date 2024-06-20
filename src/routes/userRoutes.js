const express = require('express');
const passport = require('passport');
const router = express.Router();
const { loginSuccess, loginFailure, logout } = require('../controllers/userController');

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login/failure',
  successRedirect: '/login/success'
}));

router.get('/login/success', loginSuccess);
router.get('/login/failure', loginFailure);
router.get('/logout', logout);

module.exports = router;

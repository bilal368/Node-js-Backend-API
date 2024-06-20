exports.loginSuccess = (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'User authenticated',
        user: req.user
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
    }
  };
  
  exports.loginFailure = (req, res) => {
    res.status(401).json({
      success: false,
      message: 'User authentication failed'
    });
  };
  
  exports.logout = (req, res) => {
    req.logout((err) => {
      if (err) { return next(err); }
      res.redirect('/');
    });
  };
  
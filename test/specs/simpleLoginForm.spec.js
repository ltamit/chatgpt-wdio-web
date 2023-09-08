const LoginPage = require('../pages/login.page');

describe('SimpleLoginForm', function() {
  it('should login with valid credentials', function() {
    LoginPage.open();
    LoginPage.username.setValue('tomsmith');
    LoginPage.password.setValue('SuperSecretPassword!');
    LoginPage.submit();
  });
});

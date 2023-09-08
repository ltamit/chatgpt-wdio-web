class LoginPage {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitButton() { return $('.fa'); }
  
    open() {
      browser.url('https://the-internet.herokuapp.com/login');
    }
  
    submit() {
      this.submitButton.click();
    }
  }
  
  module.exports = new LoginPage();
  
// registration.test.js
import { test } from '@playwright/test';
import { RegisterPage } from '../src/page/RegisterPage';
import { UserPage } from '../src/page/UserPage';
import data from "../data.json";


test.beforeEach(async ({ page })=> {
  await page.goto(data.url)
});


test('Register in tricentis site', async ({ page }) => {
  const register = new RegisterPage(page);
  const user = new UserPage(page);

  await register.navigateToRegister();
  await register.fillRegistrationForm(data.register_data);
  await register.submitRegistration();
  if (await register.alreadyRegister() === 'No') {
    await register.continueAfterRegistration();
    await user.verifyUserLoggedIn(data.register_data.email);
    await user.logOut()
  } else {
    console.log('Email already specified');
  };
});


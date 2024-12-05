import { expect } from '@playwright/test';

export class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToRegister() {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async submitRegistration() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async fillRegistrationForm(user) {
    await this.page.getByLabel('Male', { exact: true }).check();
    await this.page.getByLabel('First name:').fill(user.firstname);
    await this.page.getByLabel('Last name:').fill(user.lastname);
    await this.page.getByLabel('Email:').fill(user.email);
    await this.page.getByLabel('Password:', { exact: true }).fill(user.password);
    await this.page.getByLabel('Confirm password:').fill(user.password);
  }

  async continueAfterRegistration() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async alreadyRegister(){
    try {
      const errorMessage = this.page.getByText('The specified email already exists');
      
      if (await errorMessage.isVisible()) {
        console.log('Email already specified:', await errorMessage.textContent());
        return 'Yes'; 
      }
    } catch (error) {
      console.log('No exception occurred or element not found:', error.message);
    }
    return 'No'

  }
  
}

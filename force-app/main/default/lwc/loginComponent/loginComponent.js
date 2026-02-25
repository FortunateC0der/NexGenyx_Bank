 
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
 
export default class LoginComponent extends NavigationMixin(LightningElement) {
     navigateRegister() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Registration__c'
            }
        });
    }
 
     handleForgot() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Forgot_Password'
            }
        });
    }
 
      handleLogin() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Calculate__c'
            }
        });
    }
}
 
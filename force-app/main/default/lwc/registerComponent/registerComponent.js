import { LightningElement } from 'lwc';

export default class RegisterComponent extends LightningElement {
    firstName = '';
    lastName = '';
    dob = '';
    gender = '';
    panNumber = '';
    mobileNumber = '';
    emailAddress = '';

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ];

    navigateToLogin() {
        // Dispatch an event to notify parent
        const event = new CustomEvent('navigatetologin');
        this.dispatchEvent(event);
    }

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field) {
            this[field] = event.target.value;
        }
    }

    handleRegister() {
        // Simple required fields check
        if(!this.firstName || !this.lastName || !this.dob || !this.gender 
            || !this.panNumber || !this.mobileNumber || !this.emailAddress) {
            alert('Please fill out all the required fields.');
            return;
        }
        
        // Aalert success
        alert(`Registration successful for ${this.firstName} ${this.lastName}`);
    }
}
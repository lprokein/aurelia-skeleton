//import {computedFrom} from 'aurelia-framework';

export class Chat {
  heading = 'Chat!';
  sender = '';
  message = '';

  selectedRoom = 1;
  roomOptions = ['Room 1', 'Room 2', 'Room 3'];

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  submit() {
    if (this.sender.length > 0 && this.message.length > 0) {
      alert(`${this.sender} -> ${this.message}`);
    } else {
      alert("No message");
    }
    
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}

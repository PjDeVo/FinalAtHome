import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import { FormInput, FormTextArea } from '../formFields';

class ContactForm extends Component {

    render() {
        return(
            <form className = 'contact-form'>
             <Field 
                className = 'contact-form__name'
                placeholder = 'Name'
                type = 'name'
                name = 'name'
                title = "Name"
                component = {FormInput}
                />
                <Field 
                className = 'contact-form__email'
                placeholder = 'Example@Gmail.com'
                type = 'email'
                name = 'email'
                title = "Email"
                component = {FormInput}
                />
                <Field 
                className = 'contact-form__message'
                placeholder = 'Send Us A Message'
                type = 'message'
                name = 'message'
                title = "Message"
                component = {FormTextArea}
                />
            </form>
        )
    }
}

ContactForm = reduxForm({
    title: 'contact'
})(ContactForm)

export default ContactForm;
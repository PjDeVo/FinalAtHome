import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import formInput, { FormInput } from '../formFields';

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
                placeholder = 'Email'
                type = 'email'
                name = 'email'
                title = "Email"
                component = {FormInput}
                />
                <Field 
                className = 'contact-form__message'
                placeholder = 'Message'
                type = 'message'
                name = 'message'
                title = "Message"
                component = {FormInput}
                />
            </form>
        )
    }
}

ContactForm = reduxForm({
    title: 'contact'
})(ContactForm)

export default ContactForm;
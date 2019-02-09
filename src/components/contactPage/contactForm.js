import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import formInput, { FormInput } from '../formFields';

class ContactForm extends Component {

    render() {
        return(
            <form className = 'contact-form'>
                <Field 
                component = {FormInput}
                name = 'email'
                type = 'email'
                
                />
            </form>
        )
    }
}

ContactForm = reduxForm({
    title: 'contact'
})(ContactForm)

export default ContactForm;
import React, {Component} from 'react';



    export class FormInput extends Component{
        render() {
            const {className, title, input, placeholder, type } = this.props;
            return(
                <div className = 'form-input'>
                    <label> {title} </label>
                    <input 
                        className = {`${className} form-input__input`}
                        type = {type}
                        input = {input} 
                        placeholder = {placeholder} 
                    />
                </div>
            )
        }
    }

    export class FormTextArea extends Component {
        render() {
            const { className, title, input, type, placeholder } = this.props;
            return (
                <div className={`${className} form-textarea`}>
                    <label className='form-textarea__title'>{title}</label>
                    <textarea
                        className='form-textarea__input'
                        type={type}
                        input = {input}
                        placeholder={placeholder} 
    
                    >
    
                    </textarea>
                </div>
            )
        }
    }


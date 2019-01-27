import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone)
library.add(faMapMarkerAlt)

function Icon({icon}) {
    return(
        <i className ={icon}> </i>
    )
}

class Contact extends Component {
    render() {
        return(
            <div className = 'contact-wrapper'>
                <div className = 'contact-forms__wrapper'>
                    <img src = 'http://via.placeholder.com/1000x400'/>
                    <div className = 'contact__map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1993604607846!2d-75.01531538429577!3d40.160114779129614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ad9fe0b32bed%3A0x3a6dd747e6e637ac!2sGrindhouse+MMA+%26+Fitness!5e0!3m2!1sen!2sus!4v1548039573988" width="996" height="450" ></iframe>

                    </div>    
                </div>

                <div className = 'contact__info'>

                   

                    <div className = 'contact__phone-wrapper'>
                        <FontAwesomeIcon className ='contact__phone'  icon="phone" />
                        <h1> Contact Info</h1>
                        <p>215-479-9662</p>
                        <p>ghousemma@gmail.com</p>
                        <p>Jerry Bradley</p>

                    </div>
                </div>    
                <div className = 'contact__address-wrapper'>
                    <div className = 'contact__address'>
                        <FontAwesomeIcon className ='contact__map-marker'  icon="map-marker-alt" />
                        <h1> Address</h1>
                        <p> Grindhouse MMA & Fitness</p>
                        <p> 1040 Mill Creek Drive</p>
                        <p>Feasterville PA, 19053</p>

                    </div>    
                </div>
            </div>
        )
    }
}

export default Contact;
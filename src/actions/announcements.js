import {
    SET_HOME_ANNOUNCEMENTS
}from './types.js';

import add from '../../static/assets/Grindhouse/add.jpg';
import brady from '../../static/assets/Grindhouse/bradybelt.jpg';
import shirt from '../../static/assets/Grindhouse/kids-shirt.jpg';



export function setHomeAnnouncements() {
    return{
        type: SET_HOME_ANNOUNCEMENTS,
        payload: [ 
            {
 
                _id: 0,
                imageUrl: brady,
                title: 'Title One',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'

            },
            {
  
                _id: 1,
                imageUrl: add,
                title: 'Title Two',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'
            },
            {

                _id: 2,
                imageUrl: shirt,
                title: 'Title Three',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'
            }
        ]
    }
}

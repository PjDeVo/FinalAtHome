import React, {Component} from 'react';
import HomeForm from './homeForm';
import Announcements from './announcements';
import Footer from '../HeaderNavbar/footer';

class Home extends Component {

   
    render() {
        return(
            <div className = 'home'>
                <img src = {require('../../../static/assets/Grindhouse/gh-sign.png')} className = 'home__image'/> 
                <HomeForm 
                    className ={'home__form-bjj'}
                    title = {'Brazilian Jiu Jitsu'} 
                    content = {" Here is the content for the BJJ description on the homepage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                    image = {require('../../../static/assets/Grindhouse/bjjgroup2.jpg')}
                 />
                <HomeForm 
                    className ={'home__form-thai'}
                    title = {'Muay Thai Kickboxing'} 
                    content = {" Here is the content for the Muay Thai description on the homepage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                    image = {require('../../../static/assets/Grindhouse/thai.jpg')}
                 />
                 <div className = 'home__announcements-wrapper'>


                    <Announcements className = 'home__announcements'/>
                </div>

            </div>
                        
        )

    }
}

export default Home; 
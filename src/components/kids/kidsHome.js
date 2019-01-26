import React, {Component} from 'react';

class KidsHome extends Component {
      render() {
      return (
        <div className = 'kids-home'>
          
          <h1> Future Champs of Grindhouse MMA</h1>
         
          <div className = {`${'kids-home__images'} image-one`}>
            <img className = 'kids-home__image' src = {require('../../../static/assets/Grindhouse/flexwithkids.jpg')} />
            <img className = 'kids-home__image' src = {require('../../../static/assets/Grindhouse/stripekids.jpg')}/>
            <img className = 'kids-home__image' src = {require('../../../static/assets/Grindhouse/kidschoke.jpg')}/>

          </div>

          <div className = 'kids-home__main-image'>
              <img  src = {require('../../../static/assets/Grindhouse/kidsgroup.jpg')} />
          </div>

          <div className = 'kids-home__main-description'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          
        </div>
      );
    }
  }
  

export default KidsHome;
import React, {Component} from 'react';
import InstructorsLayout from './instructorsLayout';


class Instructors extends Component {
    render() {
        return(
            
            <div className = 'instructors-page'>

                <div className = 'instructors-page__title'>
                    <h1> Meet The Instructors</h1>
                </div>
                <InstructorsLayout
                    className = 'instructors-page__james'
                    image = {require('../../static/assets/Grindhouse/james.jpg')}
                    title = 'James Booth'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout 
                    className = 'instructors-page__matt'
                    image = {require('../../static/assets/Grindhouse/matt.jpg')}
                    title = 'Matty Matt'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__sean'
                    image = {require('../../static/assets/Grindhouse/sean.jpg')}
                    title = 'Sean Brady'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__pat'
                    image = {require('../../static/assets/Grindhouse/pat.jpg')}
                    title = 'Pat DeVincentis'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />

                <div className = 'instructors-page__images'>
                    <div >
                    <img className = 'instructors-page__images-image' src = {require('../../static/assets/Grindhouse/gym.jpg')} /> 
                    </div>
                    
                    <div>
                    <img className = 'instructors-page__images-image' src = {require('../../static/assets/Grindhouse/mma.jpg')} /> 
                    </div>

                    <div>
                    <img className = 'instructors-page__images-image' src = {require('../../static/assets/Grindhouse/group.jpg')} /> 
                    </div>

                    <div>
                    <img className = 'instructors-page__images-image' src = {require('../../static/assets/Grindhouse/killers.jpg')} /> 
                    </div> 
                    <div>
                    <img className = 'instructors-page__images-image' src = {require('../../static/assets/Grindhouse/bjjgroup.jpg')} /> 
                    </div> 
                   
                    
                </div>
            </div>
        )
    }
}

export default Instructors;
import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Announcements extends Component {
    

    componentWillMount() {
        this.props.setHomeAnnouncements()
    }
    
    render() {
        const {src} = this.props;
        return(
            
            <div className = 'announcements-wrapper'>

                <div className = 'announcements'>
                 
                 
                 {
                     this.props.announcements.map((announcement) => {
                         return (
                             <div className = {`announcements__${announcement._id}`}>
                                  <div className = 'announcements__imageUrl'>
                                       <img src = {announcement.imageUrl} />
                                  </div>
                                 <div className = 'announcements__title'>
                                      {announcement.title}
                                 </div>
                                 <div className = 'announcements__information'>
                                      {announcement.information}
                                 </div>
                             </div>
                         )
                     })
                 }    
  
                </div>

            </div>
         
        )
    }
}

function mapStateToProps(state) {
    const {announcements} = state.homeAnnouncements;
    return{
        announcements
    }
}

Announcements = connect(mapStateToProps, actions)(Announcements)

export default Announcements;
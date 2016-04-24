import React, { Component ,PropTypes} from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

const ProfilePic = ({src})=>{
  return <LoadingOrderAnimation animation="fade-in"
                                move="from-bottom-to-top"
                                distance={30}
                                speed={700}
                                wait={400}>
    <div className="span-lg-4 span-md-4 pull-right">
      <img src={src} alt="Tamer Elsayed"/>
    </div>
  </LoadingOrderAnimation>
};

ProfilePic.propTypes = {
  src: PropTypes.string
}

export default ProfilePic;
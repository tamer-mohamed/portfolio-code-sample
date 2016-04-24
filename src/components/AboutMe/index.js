import React, { PropTypes } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* component styles */
import { styles } from './styles.scss';


const AboutMe = ({title,desc})=>{
  return (
      <section className={`${styles}`}>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">


                <LoadingOrderAnimation animation="fade-in"
                                       move="from-bottom-to-top"
                                       distance={30}
                                       speed={700}
                                       wait={700}
                >


                  <h1 className="title">
                    { title }
                  </h1>
                </LoadingOrderAnimation>
                <LoadingOrderAnimation animation="fade-in"
                                       move="from-bottom-to-top"
                                       distance={60}
                                       speed={700}
                                       wait={900}
                >
                  <p className="desc">
                    { desc }
                  </p>
                </LoadingOrderAnimation>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};


export default AboutMe;
import React, { PropTypes } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* component styles */
import { styles } from './styles.scss';

const Greetings = ({name,desc})=>{
  return (
      <section className={`${styles}`}>

        <LoadingOrderAnimation animation="fade-in"
                               move="from-bottom-to-top"
                               distance={30}
                               speed={700}
                               wait={400}>
          <h2 className="greeting">Hi</h2>
        </LoadingOrderAnimation>


        <LoadingOrderAnimation animation="fade-in"
                               move="from-bottom-to-top"
                               distance={30}
                               speed={700}
                               wait={700}
        >


          <h1 className="title">
            I'm { name }
          </h1>
        </LoadingOrderAnimation>
        <LoadingOrderAnimation animation="fade-in"
                               move="from-bottom-to-top"
                               distance={60}
                               speed={700}
                               wait={900}
        >
          <p className="desc">
            {desc}
          </p>
        </LoadingOrderAnimation>
      </section>
  );
};

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Greetings;
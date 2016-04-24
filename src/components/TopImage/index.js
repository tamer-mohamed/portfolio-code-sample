import React, { Component ,PropTypes} from 'react';


/* utils */
import { setParallax } from '../../utils/parallax';


import Greetings from '../Greetings';
import ProfilePic from '../ProfilePic';

/* component styles */
import { styles } from './styles.scss';


const profilePhoto = require('./files/tamerelsayed.png');


export class TopImage extends Component {

  static propTypes = {
    portfolio: PropTypes.object
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>{
    setParallax(this.refs.parallax, 10);
  };

  render(){
    return (
        <section className={`${styles}`} ref="parallax">
          <div className="container">
            <div className="row">

              <Greetings name={this.props.portfolio.owner} desc={this.props.portfolio.desc}/>

              <ProfilePic src={profilePhoto}/>

            </div>
          </div>
        </section>
    );
  }
}

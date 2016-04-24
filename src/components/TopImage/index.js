import React, { Component ,PropTypes} from 'react';


/* utils */
import { setParallax } from '../../utils/parallax';


import Greetings from '../Greetings';

/* component styles */
import { styles } from './styles.scss';

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
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">

                <Greetings name={this.props.portfolio.owner} desc={this.props.portfolio.desc}/>

              </div>
            </div>
          </div>
        </section>
    );
  }
}

import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { TopImage } from 'components/TopImage';
import AboutMe  from 'components/AboutMe';
import data from '../../data';

let {owner,desc, metaData, aboutMe} = data;

export class Home extends Component {
  render(){
    return (
        <section>
          <DocumentMeta {...metaData} />
          <TopImage portfolio={{owner,desc}}/>
          <AboutMe title={aboutMe.title} desc={aboutMe.desc}/>
        </section>
    );
  }
}

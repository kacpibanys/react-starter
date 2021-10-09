import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imageLink={info.image}/>
    <p>{info.text}</p>
  </Container>
);
Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Info;
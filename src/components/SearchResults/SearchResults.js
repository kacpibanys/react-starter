import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render(){
    const {title, icon, cards} = this.props;
    return(
      <Container>
        <section className={styles.component}>
          {/* <h3 className={styles.title}>{this.props.titleCol}</h3> */}
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
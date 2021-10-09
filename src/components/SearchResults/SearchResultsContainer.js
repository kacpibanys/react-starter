import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.id),
});


export default connect(mapStateToProps)(SearchResults);
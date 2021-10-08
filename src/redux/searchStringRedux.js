import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;


// action name creator
const reducerName = 'searchStrings';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const ADD_SEARCHSTRING = createActionName('ADD_SEARCHSTRING');
// action creators
export const createAction_changeSearchString = payload => ({payload: {...payload, id: shortid.generate()}, type: ADD_SEARCHSTRING});
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}


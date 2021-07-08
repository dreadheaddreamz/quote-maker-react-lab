export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);


    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    

      default:
        return state;
  }
}
  
  
  
  
  
  

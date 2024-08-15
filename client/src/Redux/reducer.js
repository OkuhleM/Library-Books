const initialState = {
    books: [],
    borrowedBooks: [],
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      case 'BORROW_BOOK':
        return {
          ...state,
          borrowedBooks: [...state.borrowedBooks, action.payload],
        };
      // Other cases
      default:
        return state;
    }
  };
  
  export default bookReducer;
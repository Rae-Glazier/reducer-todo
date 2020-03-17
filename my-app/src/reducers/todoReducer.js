export const initialState = {
  editing: false,
  title: "new title from reducer"
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: true
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        editing: false,
        title: action.payload
      };
    default:
      return state;
  }
};
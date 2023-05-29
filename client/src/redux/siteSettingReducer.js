const initialState = {
  progress: 0,
};
const siteSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload.progress,
      };
    default:
      return state;
  }
};
export default siteSettingReducer;

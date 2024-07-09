export interface State {
  // Bu yerda state obyekti tuzilmasini aniqlang
  count: number;
}

export interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
  const { type } = action;
  switch (type) {
    case "plus":
      return { ...state, count: state.count - 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;

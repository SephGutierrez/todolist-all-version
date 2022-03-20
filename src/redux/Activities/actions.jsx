export const add = (todo) => (dispatch) => {
    dispatch({
      type: "ADD",
      payload: todo,
    });
  };
  
  export const update = (todo) => (dispatch) => {
    dispatch({
      type: "UPDATE",
      payload: todo,
    });
  };
  
  export const removed = (id) => (dispatch) => {
    dispatch({
      type: "REMOVED",
      payload: id,
    });
  };
  
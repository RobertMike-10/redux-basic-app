import  * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Eat pizza", complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {

  switch(action.type){
    case fromActions.ADD_TODO:{
       return  addTodo(state,action);
    }
    case fromActions.REMOVE_TODO:{
      return  removeTodo(state,action);
    }
  }
  return state;
}

function addTodo(state,action: { type: string; payload: any }){
  const todo = action.payload;
  const data = [...state.data, todo];
  return {...state, data:data};
}

function removeTodo(state,action: { type: string; payload: any }){
  const data = state.data.filter(x=> x.label !== action.payload.label)
  return {...state,data};
}

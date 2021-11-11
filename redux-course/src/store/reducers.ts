export const initialState = {
  loaded: false,
  loading: false,
  data: [{ lable: "Eat pizza", complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {

  switch(action.type){
    case 'ADD_TODO':{
       return  addTodo(state,action);
    }
  }
  return state;
}

function addTodo(state,action: { type: string; payload: any }){
  const todo = action.payload;
  const data = [...state.data, todo];
  return {...state, data:data};
}

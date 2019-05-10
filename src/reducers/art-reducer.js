export default (state = {title: ['Tiger','Banana','Rainbow'], description:['cool','of interest','doubt']}, action) => {
  switch (action.type) {
  case 'FORM_SUBMIT':
    const {title, description} = action;
    let newState = Object.assign({}, state, {
      title: title,
      description: description
    })
    return newState;
  default:
    return state;
  }
}

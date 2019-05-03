export default (state = {title: null, description: null}, action) => {
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
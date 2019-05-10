export default (state = {title:'Nayomis site', description:'Welcome! and thank you for visiting'}, action) => {
  switch (action.type) {
  case 'HOME_SUBMIT':
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

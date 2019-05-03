export default (state = {title: 'Tiger', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, action) => {
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
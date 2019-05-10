export default (state = {hometitle:'Nayomis site', homedescription:'Welcome! and thank you for visiting'}, action) => {
  switch (action.type) {
  case 'HOME_SUBMIT':
    const {hometitle, homedescription} = action;
    let newState = Object.assign({}, state, {
      hometitle: hometitle,
      homedescription: homedescription
    })
    return newState;
  default:
    return state;
  }
}

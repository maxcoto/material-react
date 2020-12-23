const user = (state = [], action) => {
  var obj = {}
  switch (action.type) {
  case 'SET_USER':
    return action.user

  case 'SET_ALIAS':
    obj = {...state}
    obj.alias = action.user['alias']
    return ({ ...obj })

  default:
    return state
  }
}

export default user

const message = (state = [], action) => {
  var obj = {}

  switch (action.type) {
  case 'SET_MESSAGE':
    obj['open'] = !state.open
    if(!action.msg)
      obj['msg'] = ""
    else if (action.msg.responseText)
      obj['msg'] = "No fue posible guardar el partido."
    else
      obj['msg'] = "Partido Guardado."
    return ({ ...obj })

  default:
    return state
  }
}

export default message

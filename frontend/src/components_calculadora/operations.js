import * as math from 'mathjs'

const operatorsArr = ['*', '/', '+', '-','(']

function Sin(state) {
  //const reg = new RegExp("/sin(*)/g");
  //const reg = /sin\(*\)/;
  //console.log(state)
  const val = state.replace(/sin\(.*\)/g,function(str){
    //console.log(str)
    return (str.substring(0, str.length - 1) + ' deg)')
  })
  //console.log(val)
  return val
}

function Cos(state) {
  console.log(state)
  const val = state.replace(/cos\(.*\)/g,function(str){
    console.log(str)
    return (str.substring(0, str.length - 1) + ' deg)')
  })
  console.log(val)
  return val
}

function Log(state) {
  console.log(state)
  const val = state.replace(/log\(.*\)/g,function(str){
    console.log(str)
    return (str.substring(0, str.length - 1) + ', 10)')
  })
  console.log(val)
  return val
}

const actions = {
  handleClear() {
    console.clear()
    return ''
  },

  addtoInputNum(state, param) {
    if ((state[state.length - 1] === '-' && param === '-') || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state
    } else {
      return state + param
    }
  },

  addtoInputOpr(state, param) {
    if (state === '' || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state
    } else {
      return state + param
    }
  },

  handleRoot(state) {
    if (state === '') {
      return state
    } else {
      return Math.sqrt(state)
    }
  },

  // handleRoot(state) {
  //     if (state === "") {
  //         return state;
  //     } else {
  //         return state +'sqrt('
  //     }
  // },

  handleSquare(state) {
    if (state === '') {
      return state
    } else {
      return Math.pow(state, 2)
    }
  },

  handleCube(state) {
    if (state === '') {
      return state
    } else {
      return Math.pow(state, 3)
    }
  },

  handleSin(state) {
    return state + 'sin('
  },

  handleCos(state) {
    return state + 'cos('
  },

  handleLog(state) {
    return state + 'log('
  },

  handleEqual(state) {
    if (state === '') {
      return state
    }
    else if(state.includes('sin('))
    {
      try {
        const result = math.evaluate(Sin(state))
        console.log(result)
        return result
      } catch (err) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else if(state.includes('cos('))
    {
      try {
        const result = math.evaluate(Cos(state))
        console.log(result)
        return result
      } catch (err) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else if(state.includes('log('))
    {
      try {
        const result = math.evaluate(Log(state))
        console.log(result)
        return result
      } catch (err) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else {
      try {
        const result = math.evaluate(state)
        console.log(result)
        return result
      } catch (err) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
  },

}

export default function reducer(state, action) {
  let type = action.type
  let param = action.param
  return actions[type](state, param)
}
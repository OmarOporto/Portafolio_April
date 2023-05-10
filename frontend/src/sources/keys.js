const row1 = [
  { type: 'addtoInputNum', param: '7' },
  { type: 'addtoInputNum', param: '8' },
  { type: 'addtoInputNum', param: '9' },
  { type: 'addtoInputOpr', param: '/' },
  { type: 'handleRoot' },
  { type: 'handleSin', param:'sin' }
]

const row2 = [
  { type: 'addtoInputNum', param: '4' },
  { type: 'addtoInputNum', param: '5' },
  { type: 'addtoInputNum', param: '6' },
  { type: 'addtoInputOpr', param: '*' },
  { type: 'handleSquare' },
  { type: 'handleCos', param:'cos' }
]

const row3 = [
  { type: 'addtoInputNum', param: '1' },
  { type: 'addtoInputNum', param: '2' },
  { type: 'addtoInputNum', param: '3' },
  { type: 'addtoInputOpr', param: '+' },
  { type: 'addtoInputOpr', param: '(' },
  { type: 'addtoInputOpr', param: ')' }
]

const row4 = [
  { type: 'addtoInputNum', param: '.' },
  { type: 'addtoInputNum', param: '0' },
  { type: 'addtoInputNum', param: '00' },
  { type: 'addtoInputOpr', param: '-' },
  { type: 'handleLog', param:'log' },
  { type: 'handleClear' }
]

const rows = {
  row1,
  row2,
  row3,
  row4
}

export default rows
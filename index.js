const { SerialPort  } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM6',
    baudRate: 9600,
    autoOpen: false
})

// con esto nos conectamos y checamos si hay un error
port.open(function (err) {
    if (err) {
      return console.log('Error opening port: ', err.message)
    }
})

// con esto parseamos la información para hacerla legible
const lineStream = port.pipe(new ReadlineParser())

// con esto leemos la información ya parseada
lineStream.on('data', function (data) {
    console.log(data)
})

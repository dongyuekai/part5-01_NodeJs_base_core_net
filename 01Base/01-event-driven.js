const EventEmitter = require('events')
const myEvent = new EventEmitter()

myEvent.on('event1', () => {
  console.log('event1 running...')
})
myEvent.on('event1', () => {
  console.log('event1-2 running...')
})
myEvent.emit('event1')
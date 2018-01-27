import { cube } from './math'

function component () {
  var element = document.createElement('pre')
  var btn = document.createElement('button')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

document.body.appendChild(component())

setTimeout(() => {
  location.href = 'http://test.i.meituan.com/';
}, 5000)

if (process.env.NODE_ENV === 'dev') {
  console.log('dev')
}
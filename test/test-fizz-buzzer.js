const expect = require('chai').expect
const fizzBuzzer = require('../fizzBuzzer')

describe('fizzBuzzer', () => {
  it('should return fizz-buzz', function() {
    const normalCases = [15, 30, 45, 90]

    normalCases.forEach(input => {
      let answer = fizzBuzzer(input)
      return expect(answer).to.equal('fizz-buzz')
    })
  })

  it('should return buzz', () => {
    const normalCases = [5, 10, 20, 35, 50]

    normalCases.forEach(input => {
      let answer = fizzBuzzer(input)
      return expect(answer).to.equal('buzz')
    })
  })

  it('should return fizz', () => {
    const normalCases = [3, 6, 33, 36, 42]

    normalCases.forEach(function(input) {
      let answer = fizzBuzzer(input)
      return expect(answer).to.equal('fizz')
    })
  })

  it('should return a normal number', () => {
    const normalCases = [2, 4, 22, 11, 32]

    normalCases.forEach(function(input) {
      let answer = fizzBuzzer(input)
      return expect(answer).to.equal(input)
    })
  })

  it('should throw an error if not a number', () => {
    const normalCases = ['poop', true, false, '36', 'wuddup']

    normalCases.forEach(input => {
      expect(() => {
        fizzBuzzer(input)
      }).to.throw(Error)
    })
  })
})

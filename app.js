var name = prompt('What is your name?')
alert('Welcome to my site ' + name + '!')

for (i = 0; i < 1 || i < question.length; i++) {

  var q = new Object()

  q.one = 'Do I watch football?'
  q.two = 'Have I ever eatin sushi?'
  q.three = 'Is my nickname "Brogrammer"?'
  q.four = 'Do I like "Red Robin"?'
  q.five = 'Do I have any pets?'
  q.six = 'Have I ever watched \'Indiana Jones\'?'
  q.seven = 'What is my favorite number?'

  var question = [q.one, q.two, q.three, q.four, q.five, q.six, q.seven]
  var answer = ['yes', 'no', 'no', 'yes', 'no', 'no', '3']
  var notanswer = ['no', 'yes', 'yes', 'no', 'yes', 'yes', 'not 3']

  question[i] = prompt(question[i])

  if (i === 6) {
    if (question[i] !== answer[i]) {
      question[i] = notanswer[i];
    }
  }
    if (question[i] === answer[i]) {
      alert('You\'re right.')
    } else if (question[i] === notanswer[i]) {
    alert('Nope.')
      i -= 1
    } else {
      alert('Are you okay?')
      i -= 1
    }
  }

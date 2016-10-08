var name = prompt('What is your name?')
alert('Welcome to my site ' + name + '!')

  var question = ['Do I watch football?',
  'Have I ever eatin sushi?',
  'Is my nickname "Brogrammer"?',
  'Do I like "Red Robin"?',
  'Do I have any pets?',
  'Have I ever watched \'Indiana Jones\'?',
  'What is my favorite number?']

  var answer = [
    ['yes', 'no'],
    ['no', 'yes'],
    ['no', 'yes'],
    ['yes', 'no'],
    ['no', 'yes'],
    ['no', 'yes'],
    ['3', 'not 3']
  ]

  for (i = 0; i < 1 || i < question.length; i++) {

  question[i] = prompt(question[i])

  if (i === 6) {
    if (question[i] !== answer[i][0]) {
      question[i] = answer[i][1];
    }
  }
    if (question[i] === answer[i][0]) {
      alert('You\'re right.')
    } else if (question[i] === answer[i][1]) {
    alert('Nope.')
      i -= 1
    } else {
      alert('Are you okay?')
      i -= 1
    }
  }

let counter = 0;
function inception() {
  if(counter > 3) {
    console.log('Enough of inceptions')
    return 'done';
  }
  console.log('Running inception ' + counter + ' times');
  counter++;
  return inception();
}

console.log(inception());
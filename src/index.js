module.exports = function check(str, bracketsConfig) {
  if (str.length === 0) {
    return true;
}
  if (str.length === 1)
    return false
  
  let bracket
  let stack = []
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '[' || str[i] == '{'
      || str[i] == '|' || str[i] == '1' || str[i] == '3'
      || str[i] == '5' || str[i] == '7' || str[i] == '8') {

      stack.push(str[i]);
    }
    if (str[i]== ')'){
      if (stack.pop() != '(') { return false }
    }
    if (str[i] == ']') {
      if (stack.pop() != '[') { return false }
    }
    if (str[i] == '}') {
      if (stack.pop() != '{') { return false }
    }

    if (str[i] == '2') {
      if (stack.pop() != '1') { return false }
    }
    if (str[i] == '4') {
      if (stack.pop() != '3') { return false }
    }
    if (str[i] == '6') {
      if (stack.pop() != '5') { return false }
    }
    
    if (stack[stack.length - 1] == '|' && stack[stack.length - 2] == '|') {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 1] == '7' && stack[stack.length - 2] == '7') {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 1] == '8' && stack[stack.length - 2] == '8') {
      stack.pop();
      stack.pop();
    }
  }
  return (stack.length > 0) ? false : true;
}

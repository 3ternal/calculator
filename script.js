var array = [];
var operation;
var result;
var pressedEquals = false;
var listOfOperations = ["+", "-", "*", "/"]

function addition(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function logInput(num) {

  if (isNaN(num) == false || num == ".") {
    if (pressedEquals == true) {
      array.length = 0;
      $(".screen").text("");
    }
    if (array.length == 0) {
      array.push(num.toString());
      $(".screen").append(array[array.length - 1]);
    }
    else {
      if (num == "." & array[array.length - 1].indexOf(".") == 1) {
        num = "";
      }
      array[array.length - 1] = array[array.length - 1] + num;
      $(".screen").append(num);
    }

    console.log(array);
  }

  if (num == "=") {
    if (array[array.length - 1] == 0) {
      operation = "";
      num = "";
      result = 0;
      pressedEquals = false;
      array.length = 0;
      $(".screen").text("");
      console.log(array);
    }
    switch (operation) {
      case "+":
        result = addition(array[0], array[1]);
        break;
      case "/":
        result = divide(array[0], array[1]);
        break;
      case "-":
        result = subtract(array[0], array[1]);
        break;
      case "*":
        result = multiply(array[0], array[1]);
        break;
    }

    array.length = 0;
    operation = "";
    array.push(result.toString());
    console.log(array);

    if (num == "=") {
      $(".screen").text(result);
      pressedEquals = true;
    }
  }

  if (num == "/" || num == "*" || num == "-" || num == "+") {
    console.log(listOfOperations.indexOf($(".screen").text()[$(".screen").text().length - 1]));
    if (listOfOperations.indexOf($(".screen").text()[$(".screen").text().length - 1]) == -1) {
      if (array.length == 2) {
        switch (operation) {
          case "+":
            result = addition(array[0], array[1]);
            break;
          case "/":
            result = divide(array[0], array[1]);
            break;
          case "-":
            result = subtract(array[0], array[1]);
            break;
          case "*":
            result = multiply(array[0], array[1]);
            break;
        }

        array.length = 0;
        operation = "";
        array.push(result.toString());
      }

      operation = num;
      array.push("0");
      pressedEquals = false;
      $(".screen").append(operation);
      console.log(array);
    }
  }

  if (num == "clear") {
    operation = "";
    num = "";
    result = 0;
    pressedEquals = false;
    array.length = 0;
    $(".screen").text("");
    console.log(array);
  }

}

class Greeter {

  saySomething(message) {
    return message + ' something';
  }

}

var greeter = new Greeter();
greeter.saySomething('hello');
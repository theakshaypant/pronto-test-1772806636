<<<<<<< HEAD
// Simple test application - Release 1.0 Version
function hello(name) {
  console.log(`Hello, ${name}!`);
}

function goodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

function welcome(name) {
  console.log(`Welcome to v1.0, ${name}!`);
}

module.exports = { hello, goodbye, welcome };
=======
// Simple test application - COMPLETELY REFACTORED
// This refactor will conflict with the original app.js in release branches
class Greeter {
  static hello(name) {
    console.log(`Hello, ${name}!`);
  }

  static goodbye(name) {
    console.log(`Goodbye, ${name}!`);
  }

  static welcome(name) {
    console.log(`Welcome, ${name}!`);
  }
}

module.exports = Greeter;
>>>>>>> 9f6101a (refactor: convert app.js to class-based API)

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

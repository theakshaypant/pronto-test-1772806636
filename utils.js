// Utility functions
function formatMessage(message, name) {
  return `${message}, ${name}!`;
}

function timestamp() {
  return new Date().toISOString();
}

module.exports = { formatMessage, timestamp };

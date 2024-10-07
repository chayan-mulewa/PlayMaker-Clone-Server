const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidUsername = (username) => {
  return /^[a-zA-Z0-9_]+$/.test(username);
};

const trimData = (data) => {
  const trimmedData = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      trimmedData[key] = data[key].trim();
    }
  }
  return trimmedData;
};

module.exports = { isValidUsername, isValidEmail, trimData };

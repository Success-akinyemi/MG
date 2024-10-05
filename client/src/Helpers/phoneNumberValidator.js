import telcos from './telcos';

/**
 * Removes the country code from a phone number.
 * @param {string} phoneNumber - The phone number to modify.
 * @returns {string} - The phone number without the country code.
 */
const removeCountryCode = (phoneNumber) => {
  if (phoneNumber.slice(0, 3) === "234") {
    phoneNumber = `0${phoneNumber.slice(3)}`;
  } else if (phoneNumber.slice(0, 4) === "+234") {
    phoneNumber = `0${phoneNumber.slice(4)}`;
  }
  return phoneNumber;
};

/**
 * Validates a phone number synchronously.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {object} - Returns a result construct.
 */
export const validatePhoneNumberSync = (phoneNumber) => {
  const errors = [];
  phoneNumber = removeCountryCode(phoneNumber);
  
  const telcoType = telcos.find(telco => telco.prefix === phoneNumber.slice(0, telco.prefix.length));
  const isValidLength = phoneNumber.length === 11;
  const isNumber = /^[0-9]*$/.test(phoneNumber);

  if (!telcoType) {
    errors.push('Phone number doesn\'t match a valid service provider');
  }

  if (!isValidLength) {
    errors.push('Phone number should be 11 characters long');
  }

  if (!isNumber) {
    errors.push('Invalid number character detected');
  }

  const allChecksPass = [!!telcoType, isNumber, isValidLength].every(val => val === true);

  const errorConstruct = {
    errors,
    isValid: false,
  };

  const successConstruct = {
    telco: telcoType?.name,
    isValid: true,
  };

  return allChecksPass ? successConstruct : errorConstruct;
};

/**
 * Validates a phone number asynchronously.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {Promise} - Resolves with the result or rejects with errors.
 */
export const validatePhoneNumberAsync = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    const result = validatePhoneNumberSync(phoneNumber);
    if (result.isValid) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};

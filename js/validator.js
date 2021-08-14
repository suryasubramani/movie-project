class Validator {
    static isValidString(input, message) {
      if (input == null || input.trim() == "") {
        //alert(message);
        throw new Error(message);
      }
    }
  }
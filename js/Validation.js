// Class: Validation
// Description: Validation is static class with a set of functons 
//              for form fields validation

class Validation {
  static validateURL = (inputValue) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    if (pattern.test(inputValue)) {
      return "";
    } else {
      return "Здесь должна быть ссылка";
    }
  };

  static validateLength = (inputValue, min, max) => {
    const inputLength = inputValue.length;
    if (inputLength >= min && inputLength <= max) {
      return "";
    } else if (!inputLength) {
      return "Это обязательное поле.";
    } else {
      return `Должно быть от ${min} до ${max} символов.`;
    }
  };
}

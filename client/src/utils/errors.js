class Errors {
  static emailMessage(errors) {
    if (errors.length > 0) {
      const message = errors.map(e => {
        if (e.source === "email") {
          return "メールアドレス" + e.message;
        }
        return "";
      });
      return message[0];
    }
    return "";
  }
}

export default Errors;

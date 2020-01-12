const nameValidates = name => {
  if (!name) {
    return "ユーザー名を入力してください";
  }
  if (name.length < 4) {
    return "ユーザー名は4文字以上入力してください";
  }
};

const emailValidates = email => {
  if (!email) {
    return "メールアドレスを入力してください";
  }
  const regex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
  if (!regex.test(email)) {
    return "メールアドレスの形式が不正です";
  }
};

const passwordValidates = password => {
  if (!password) {
    return "パスワードを入力してください";
  }
  if (password.length < 6) {
    return "パスワードは6文字以上入力してください";
  }
};

class Validation {
  static formValidates(key, value) {
    switch (key) {
      case "name":
        return nameValidates(value);
      case "email":
        return emailValidates(value);
      case "password":
        return passwordValidates(value);
      default:
        return value;
    }
  }
}

export default Validation;

const nameValidates = name => {
  if (!name) {
    return "ユーザー名を入力してください";
  } else if (name.length < 4) {
    return "ユーザー名は4文字以上入力してください";
  } else {
    return "";
  }
};

const emailValidates = email => {
  const regex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

  if (!email) {
    return "メールアドレスを入力してください";
  } else if (!regex.test(email)) {
    return "メールアドレスの形式が不正です";
  } else {
    return "";
  }
};

const passwordValidates = password => {
  if (!password) {
    return "パスワードを入力してください";
  } else if (password.length < 6) {
    return "パスワードは6文字以上入力してください";
  } else {
    return "";
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

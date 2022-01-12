class Unauthorized extends Error {
    constructor(message) {
      super(message);
      this.name = "Unauthorized";
      this.status = 401;
    }
  }
  //Код ошибки 401 означает, что запрос направлен к защищенным ресурсам,
  //для которых требуется аутентификация. Сервер ожидает получить логин и пароль, но в запросе их нет.
  module.exports = Unauthorized;
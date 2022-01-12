class NotAcceptableError extends Error {
    constructor(message) {
      super(message);
      this.name = "Not acceptable";
      this.status = 406;
    }
  }
  //Ошибка ​406. Расшифровывается как "неприемлемо". Достаточно редкий ответ. Возникает,
  // если сервер отдает информацию в виде, который не может распознать клиент
  module.exports = NotAcceptableError;
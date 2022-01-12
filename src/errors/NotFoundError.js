class NotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = "Not found";
      this.status = 404;
    }
  }
  //Not Found «не найдено») — стандартный код ответа HTTP о том, что клиент был в 
  //состоянии общаться с сервером, но сервер не может найти данные согласно запросу
  module.exports = NotFoundError;
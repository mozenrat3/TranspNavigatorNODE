class ForbiddenError extends Error {
    constructor(message) {
      super(message);
      this.name = "Forbidden";
      this.status = 403;
    }
  }
  //Код 403 обозначает ошибку запрета доступа — Forbidden. 
  //Появляется она тогда, когда веб-сервер отказывает в доступе на запрашиваемую страницу.
  module.exports = ForbiddenError;
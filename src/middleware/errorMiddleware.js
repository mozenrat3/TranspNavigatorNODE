//мидлы - проверка на ошибки.валидация и т.п(промежуточные обработчики)

module.exports =  (error, req, res, next) => {
    if(error)
        res.status(500).json({message:error.message});
    else 
        next();
    
}
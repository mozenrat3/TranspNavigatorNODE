const routeService = require("../services/routeService");

test('get all routes',async () => {

    await routeService.getAllRoutes().then(data => {
        expect(data).not.toBeNull();//expect сравнивается с нот ту би налл
        //expect предоставляет вам доступ к ряду «проверок» (matchers), которые позволяют сопоставить результаты с ожиданиями.
    });

});

test('add route ',async () => {

    let route = {
        number:5,
        length:2,
        stop_start:1,
        stop_end:2
    }
//resolves ждет результата промиса
    await expect(routeService.createRoute(route)).resolves.not.toBeNull();

});
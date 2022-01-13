const routeService = require("../services/routeService");

test('get all routes',async () => {

    await routeService.getAllRoutes().then(data => {
        expect(data).not.toBeNull();
    });

});

test('add route ',async () => {

    let route = {
        number:5,
        length:2,
        stop_start:1,
        stop_end:2
    }

    await expect(routeService.createRoute(route)).resolves.toBeNull();

});
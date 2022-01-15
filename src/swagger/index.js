// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import swaggerAutogen from 'swagger-autogen';

const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
//
// const _dirname = dirname(fileURLToPath(import.meta.url));

const doc = {

  info: {
    title: 'My API',
    description: 'My All API',
    version :"1.0.0"
  },
  host: 'localhost:3000',
  schemes: ['http'],
  consumes: [],
  produces: [],
  tags: [        
            {
                name: 'Users',         
                description: 'Users API',  
            },
            {
                name: 'Reviews',         
                description: 'Reviews API',  
            },
            {
                name: 'Routes',         
                description: 'Routes API', 
            },
            {
                name: 'Stops',        
                description: 'Stops API',  
            },
            {
                name: 'Transports',         
                description: 'Transports API',  
            },
            {
                name: 'Timetables',         
                description: 'Timetables API', 
            }
        ],
  securityDefinitions: {
    bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
    }
}, 
definitions: {},
components:{}
  // definitions: {
  //  user:{
  //     login:"test",
  //     password:"test", 
  //     email: "test@mail.net", 
  //     passwordConfirm:"testpassword"
  //   },
  //   users:[{
  //     $ref: '#/definitions/user'
  //   }],
  //   review:{
  //      user_id : 3,
  //      route_id : 1,
  //     comment: "testcom1",
  //     rate: 3 ,
  //     dates: "2011-01-01 12:00:00"
  //   },
  //   reviews:[{
  //     $ref: '#definitions/review'
  //   }],
  //   route:{
  //     number: 120,
  //     length: 11 ,
  //     stop_start: 1,
  //     stop_end : 5
  //   },
  //   routes:[{
  //     $ref: '#definitions/route'
  //   }],
  //   stop:{
  //     name: "testname1",
  //     coords: "testcoords1" 
  //   },
  //   stops:[{
  //     $ref: '#definitions/stop'
  //   }],
  //   transport:{
  //     type: "testtram1"
  //   },
  //   transports:[{
  //     $ref: '#definitions/transport'
  //   }],
  //   timetable:{
  //    route_id: 1,
  //    weekdays: 3 ,
  //    arrival_time: "2011-01-01 12:00:00"
  //   },
  //   timetables:[{
  //     $ref: '#definitions/timetable'
  //   }],
  // },

}

const outputFile = 'src/swagger/output.json';
const endpointsFiles = ["C:/NodeJSProjects/Main.js"]

swaggerAutogen(outputFile, endpointsFiles, doc).then(
  ({ success }) => {
    console.log(`Generated: ${success}`)
  }
)
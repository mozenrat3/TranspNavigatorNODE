const sequelize = require("../database/sequelize");
const User = require("./User");
const UserRole = require("./UserRole");
const Role = require("./Role");
const Reviews = require("./Reviews");
const Routes = require("./Routes");
const RoutesStops = require("./RoutesStops");
const Timetable = require("./Timetable");
const Transport = require("./Transport");
const Stops = require("./Stops");
//console.log("hello");
//otherKey:"user_id"
Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id", });
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });
//Для хранения соответствия ключей пользователся и рооли будет создана отдельная таблица, 
//название которой указывается в поле through объекта, передаваемого методу belongsToMany() вторым параметром.

User.hasMany(Reviews,{foreignKey:"user_id"});
//review.belongsTo(User)
Routes.hasMany(Reviews,{foreignKey:"route_id"});
Stops.belongsToMany(Routes,{through:RoutesStops,foreignKey: "stop_id"});
Routes.belongsToMany(Stops,{through:RoutesStops,foreignKey: "route_id"});

// Timetable.hasMany(Stops,{foreignKey:"timetable_id"});
Timetable.hasMany(Transport,{foreignKey:"timetable_id"});
Timetable.hasMany(Routes,{foreignKey:"timetable_id"});

// sequelize.sync({force:true}).then(()=>{
//   console.log("Tables have been created");
// }).catch(err=>console.log(err));
sequelize.sync().then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));


module.exports = sequelize;

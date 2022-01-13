let timetableRepository = require("../repository/timetableRepository");
//для запуска репозиториев.(упрощает их использование)
module.exports = {

    getTimetableById : async function(ttId) {
        return await timetableRepository.getTimetableById(ttId);
    },

    getAllTimetables : async function(tt) {
        return await timetableRepository.getAllTimetables(tt);
    },

    createTimetable : async function(tt){
        return await timetableRepository.createTimetable(tt);
    },
    changeTimetableById : async function(data1,ttId) {
        return await timetableRepository.changeTimetableById(data1,ttId);
    },
    deleteTimetableById : async function(ttId) {
        console.log("SERVICE USED");
        return await timetableRepository.deleteTimetableById(ttId);
    }

}
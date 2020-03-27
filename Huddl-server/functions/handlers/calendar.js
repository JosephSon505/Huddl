const { db, admin } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');
const { uuid } = require('uuidv4');

firebase.initializeApp(config);

/*
Create calendar call
    Receives object, creates UUID for identifier
    Creates a new doc under events and sets values from the 
*/
exports.calendarEvent = (req, res) => {
    var newEventId = uuid();
    var userCreate = req.body.currentUserHandle
    var userReceive = req.body.handle
    createNewEvent(userCreate, newEventId)
    createNewEvent(userReceive, newEventId)
};

createNewEvent = (user ,eventId) => {
    db.doc(`/Users/${user}/events/${eventId}`).set({
        startDate: req.body.dateStart,
        endDate: req.body.dateEnd,
        title: req.body.title
    }).catch((err) => {
        console.log(err)
        return res.status(200)
    })
    return res.status(400)
}

exports.updateEvents = (req,res) => {
    var user = req.body.currentUser
    var events = []
    db.collection(`/Users/${user}/events/`).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            events.push(
                doc.data()
            )
        }).catch((err) => {
            console.log(err)
            return res.status(400)
        })
    })
    return res.status(200).json(events)
}
'use strict';

function Ticket(id, flight, buyTime, fullName, registrationTime, type, seat) {

    this.id = id;
    this.flight = flight;
    this.buyTime = buyTime;
    this.fullName = fullName;
    this.registrationTime = registrationTime;
    this.type = type;
    this.seat = seat;

    this.eRegistration = function (nowTime) {

        this.registrationTime = nowTime;

        return true;

    };

}
'use strict';

class Ticket {
    constructor(id, flight, buyTime, fullName, registrationTime, type, seat) {
        this._id = id;
        this._flight = flight;
        this._buyTime = buyTime;
        this._fullName = fullName;
        this._registrationTime = registrationTime;
        this._type = type;
        this._seat = seat;
    }

    get id() { return this._id; }
    get flight() { return this._flight; }
    get buyTime() { return this._buyTime; }
    get fullName() { return this._fullName; }
    get registrationTime() { return this._registrationTime; }
    get type() { return this._type; }
    get seat() { return this._seat; }

    eRegistration(nowTime) {

        this._registrationTime = nowTime;

        return true;

    };

}

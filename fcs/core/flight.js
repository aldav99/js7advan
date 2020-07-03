'use strict';

function Flight(name, seats, businessSeats, registrationStarts, registrationEnds) {
    this.name = name;
    this.seats = seats;
    this.businessSeats = businessSeats;
    this.registrationStarts = registrationStarts;
    this.registrationEnds = registrationEnds;
    this.tickets = [];

    this.buyTicket = function (buyTime, fullName, type = 0) {

        const seat = findAvailableSeat(this, type);
        if (!seat)
            throw new Error(`No seats of type ${type} available. You can choose another type`);

        let id, exists;
        do {
            id = this.name + '-' + (this.tickets.length + 1); // Math.random().toString().substr(2, 3);
            exists = this.tickets.find(item => item.id === id);
        } while (exists);

        /**
         * @type {Ticket}
         */
        const ticket = new Ticket(id, this.name, buyTime, fullName, null, type, seat);

        this.tickets.push(ticket);

        return { ...ticket }; // копируем, что бы "пассажир" случайно ничего не изменил в самой информации о рейсе
    };

    this.eRegistration = function (ticketNumber, fullName, nowTime) {
        const ticket = this.tickets.find(ticket => ticket.id === ticketNumber);

        if (!ticket)
            throw new Error('Invalid ticket number');

        if (ticket.fullName !== fullName)
            throw new Error('Invalid passenger\'s name');

        ticket.eRegistration(nowTime);

    };

    this.flightReport = function (flightNumber, nowTime) {

        const registration = this.registrationStarts <= nowTime && nowTime <= this.registrationEnds;
        const complete = nowTime > this.registrationEnds;
        const countOfSeats = this.seats;
        const reservedSeats = this.tickets.length;
        const registeredSeats = this.tickets.filter(t => t.registrationTime !== null).length;

        return {
            flight: flightNumber,
            registration,
            complete,
            countOfSeats,
            reservedSeats,
            registeredSeats
        };
    };


}
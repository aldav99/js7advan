'use strict';


/**
 * Покупка билета на самолет
 *
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 *
 * @param {World.flights} flights Все рейсы
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns { {world: World, ticket: Ticket} } Возвращаем копию билета
 */
// function buyTicket(flights, flightName, buyTime, fullName, type = 0) {
//     world.buyTicket(flights, flightName, buyTime, fullName, type = 0);
    // /**
    //  * @type {Flight}
    //  */
    // const flight = flights[flightName];

    // if (!flight)
    //     throw new Error('Flight not found');

    // if (flight.tickets.length >= flight.seats)
    //     throw new Error('No seats available');

    // if (buyTime > flight.registartionEnds)
    //     throw new Error('Time away');

    // const seat = findAvailableSeat(flight, type);
    // if (!seat)
    //     throw new Error(`No seats of type ${type} available. You can choose another type`);

    // let id, exists;
    // do {
    //     id = flight.name + '-' + (flight.tickets.length + 1); // Math.random().toString().substr(2, 3);
    //     exists = flight.tickets.find(item => item.id === id);
    // } while (exists);

    // /**
    //  * @type {Ticket}
    //  */
    // const ticket = {
    //     id,
    //     flight: flight.name,
    //     buyTime,
    //     fullName,
    //     registrationTime: null,
    //     type,
    //     seat,
    // };

    // flight.tickets.push(ticket);

    // return { ...ticket }; // копируем, что бы "пассажир" случайно ничего не изменил в самой информации о рейсе
// }
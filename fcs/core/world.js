'use strict';

function World() {
    const CHARCODE_A = 'A'.charCodeAt(0);

    this.flights = {};
    this.history = [];



    /**
     * Добавление рейса
     *
     * * назначение номера рейса
     * * подготовка рейса
     *   * вычисление времени регистрации
     *   * подготовка структуры Flight
     *
     * @param {World.flights} flights Все рейсы
     * @param {Airliner} airliner Информация о самолете
     * @param {number} time Время вылета
     * @param {string?} name Имя рейса
     * @returns {Flight} Рейс
     */


    this.addFlight = function (flights, airliner, time, name) {
        /// @type {Flight}

        while (name in flights) {
            name = [
                String.fromCharCode(CHARCODE_A + random(0, 26)),
                String.fromCharCode(CHARCODE_A + random(0, 26)),
                random(100, 999)
            ].join('');
        }

        /**
         * @type Flight
         */
        const flight = new Flight(name, airliner.seats, airliner.businessSeats, time - 5 * 3600 * 1000, time - 1 * 3600 * 1000);

        this.flights[name] = flight;

        return flight;
    };

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

    this.buyTicket = function (flights, flightName, buyTime, fullName, type = 0) {
        /**
         * @type {Flight}
         */


        const flight = this.flights[flightName];

        if (!flight)
            throw new Error('Flight not found');

        if (flight.tickets.length >= flight.seats)
            throw new Error('No seats available');

        if (buyTime > flight.registartionEnds)
            throw new Error('Time away');

        flight.buyTicket(buyTime, fullName, type = 0);
    };

    this.eRegistration = function (flights, ticketNumber, fullName, nowTime) {
        const flight = flights[ticketNumber.split('-')[0]];

        if (!flight)
            throw new Error('Flight not found');

        if (nowTime < flight.registrationStarts)
            throw new Error('Check-in has not started yet');

        if (nowTime >= flight.registartionEnds)
            throw new Error('Check-in is over');

        flight.eRegistration(ticketNumber, fullName, nowTime);

    };
}
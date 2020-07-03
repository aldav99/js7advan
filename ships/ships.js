'use strict';

function Ship(name, model, position) {
    let _isAnchorDroped = false;
    this.name = name;
    this.model = model;
    this.position = position || { x: 0, y: 0 };
    this.speed = 0;
    this.distance = 0;
    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        if (this.speed == 0)
            throw new Error('Speed must be more than 0');

        this.distance = distance(this.position, position);

        this.position = {
            x: position.x,
            y: position.y,
        }
        return true;
    };

    this.move = function (direction) {
        const available_direction = ['n', 'w', 's', 'e'];

        if (!available_direction.includes(direction))
            throw new Error('Directon is not know');

        let x = this.position.x;
        let y = this.position.y;

        let yn = y + 1;
        let ys = y - 1;
        let xw = x - 1;
        let xe = x + 1;


        switch (direction) {
            case "n":
                this.moveTo({ x: x, y: yn });
                break;
            case "w":
                this.moveTo({ x: xw, y: y });
                break;
            case "s":
                this.moveTo({ x: x, y: ys });
                break;
            case "e":
                this.moveTo({ x: xe, y: y });
                break;
        }
    }

    this.setSpeed = function (speed) {
        if (this.isAnchorDroped())
            throw new Error('You need to rise anchor');

        this.speed = speed;
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };

    this.riseAnchor = () => {
        _isAnchorDroped = false;
    };
}

function Dock(position, ships) {
    this.position = position;
    this.ships = ships || [];

    this.moor = function (ship) {
        if (ship.position.x !== this.position.x || ship.position.y !== this.position.y)
            throw new Error('Ship is not hier');

        if (ship.speed !== 0)
            throw new Error('Stop');

        if (!ship.isAnchorDroped()) ship.dropAnchor();

        this.ships.push(ship);
    }

    this.unmoor = function (ship) {
        let index = this.ships.indexOf(ship);

        if (index == -1)
            throw new Error('Ship is not found');
        else
            this.ships.splice(index, 1);

        ship.riseAnchor();
    }

    this.mooredShipsList = function () {
        return this.ships.map(ship => ship.name);
    }
}

// const ship = new Ship('Best ship');
// ship.moveTo({ x: 10, y: 10 });
// console.log(ship);

// ship.dropAnchor();

// ship.moveTo({ x: 20, y: 20 });
// console.log(ship);


// const ship2 = new Ship('Good ship 2');







// console.log(ship);
// console.log(ship.getAnchorDroped());
// // ship._isAnchorDroped = true; Так нельзя
// console.log(ship);
// console.log('  after 1 try', ship.getAnchorDroped());
// ship.speed = 0;
// ship.setAnchorDroped(true);
// console.log(ship);
// console.log(ship.getAnchorDroped());




// const car = {
//     model: 'Model X',
//     seats: 4,
// }

// dropAnchor(ship);
// dropAnchor(car);

// function dropAnchor(ship) {
//     console.log(ship);
//     console.log(typeof ship);

//     if (!(ship instanceof Ship))
//         throw new Error('Not a Ship');

//     ship.isAnchorDroped = true;
// }









// Save it

// const arr = {
//     '0': 'a',
//     '1': 'b',
//     length: 2,
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// Array.from(arr)
//      .forEach(item => console.log(item))
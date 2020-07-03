'use strict';

class Class {
    constructor(group, date) {
        this.group = group;
        this.date = date;
        this.frosenPresentArray = JSON.stringify(this.group.presentStudents());
    }


    get listOfPresent() {
        return JSON.parse(this.frosenPresentArray);
    }

    get numberOfPresent() {
        return this.listOfPresent.length;
    }
}

let class1 = new Class(group1, date);



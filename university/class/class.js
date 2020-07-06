'use strict';

class Class {
    constructor(group, date) {
        this.group = group;
        this.date = date;
        this._frosenAbsentArray = [...this.group.absentStudents()];
        this._frosenPresentArray = [...this.group.presentStudents()];
    }


    get listOfPresent() {
        return [...this._frosenPresentArray];
    }

    get listOfAbsent() {
        return [...this._frosenAbsentArray];
    }

    get numberOfPresent() {
        return this.listOfPresent.length;
    }
}

let class1 = new Class(group1, date);



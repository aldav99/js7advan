'use strict';

function Student(fio) {
    let _goodHealth = true;
    this.fio = fio;

    [this.surname,
    this.name,
    this.patronymic] = breakWithSpace(fio);

    this.fullName = function () {
        return this.fio;
    };

    this.initials = function () {
        return `${this.surname} ${this.name.charAt(0)}. ${this.patronymic.charAt(0)}.`;
    };

    this.isYouHealth = function () {
        return _goodHealth;
    };

    this.getSick = function () {
        _goodHealth = false;
    };

    this.recover = function () {
        _goodHealth = true;
    };
}

let student1 = new Student('Ivanov Ivan Ivanovitch');
let student2 = new Student('Petrov Petr Petrovitch');
let student3 = new Student('Sidorov Sidor Sidorovitch');

student1.getSick();

let arrStudents = [student1, student2, student3];



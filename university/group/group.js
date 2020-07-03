'use strict';

function Group(numberOfgroup, listOfStudentsArr) {
    this.numberOfgroup = numberOfgroup;
    this.listOfStudentsArr = listOfStudentsArr;

    this.absentStudents = function () {
        return this.listOfStudentsArr.filter(student => !student.isYouHealth()).map(student => student.initials());
    };

    this.presentStudents = function () {
        return this.listOfStudentsArr.filter(student => student.isYouHealth()).map(student => student.initials());
    };
}

let group1 = new Group(1, arrStudents);
let date = new Date(2020, 5, 6);

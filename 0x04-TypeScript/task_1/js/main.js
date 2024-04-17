var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ".").concat(lastName); };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName;
        this.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Djo", "djo");
console.log(student.displayName());
console.log(student.workOnHomework());

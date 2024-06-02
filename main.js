"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Student_data = {
    Name: "REHAN",
    ID: 77,
    ContactNo: 3113536989,
    Email: "shah@gmail.com",
    Age: 78,
};
function Student_Detail(name, id, email, contact, age) {
    Student_data = {
        Name: name,
        ID: id,
        ContactNo: contact,
        Email: email,
        Age: age,
    };
    console.log(`student Name : ${Student_data.Name}\n student ID: ${Student_data.ID}\n student Email: ${Student_data.Email}\n student age : ${Student_data.Age}\n Contact Number: ${Student_data.ContactNo}\n`);
}
//call function
Student_Detail("Muzaffar", 2738, "kalwar@gmail.com", 3113536989, 19);
Student_Detail("Rehan", 9202, "shah@gmail.com", 3112829897, 20);
Student_Detail("kashii", 674, "pakistani@gmail.com", 3052678288, 18);

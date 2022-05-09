let employees = [];
let selectedIndex = -1;


function addEmployee() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let age = document.getElementById('age').value;
    let price = document.getElementById('price').value;
    let position = document.getElementById('position').value;

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('price').value = '';
    document.getElementById('position').value = '';

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        price: price,
        position: position
    };
    if (selectedIndex >= 0){
        employees[selectedIndex] = newEmployee;
        selectedIndex = -1;
    }else{
        employees.push(newEmployee);
    }

    drawPage();
}

function drawPage() {
    let result = '';

    for (let  i = 0; i < employees.length; i++ ){
        result +=
            "<div class='col-4 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h4>" + employees[i].firstName + " " +  employees[i].lastName +"</h4></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>" + employees[i].age +"</b></p>" +
            "<p>Price: <b>" + employees[i].price +"</b></p>" +
            "<p>Position: <b>" + employees[i].position +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button class='btn btn-success' data-toggle='modal' data-target='#modal' onclick='editEmployee("+ i +")'>Edit</button>" +
            "<button class='btn btn-danger'  data-target='#delete' onclick='deleteEmployee("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById('result').innerHTML = result;
}
function deleteEmployee(index) {
    employees.splice(index, 1);
    drawPage();
}

function editEmployee(index) {
    document.getElementById('first-name').value = employees[index].firstName;
    document.getElementById('last-name').value = employees[index].lastName;
    document.getElementById('age').value = employees[index].age;
    document.getElementById('price').value = employees[index].price;
    document.getElementById('position').value = employees[index].position;
    selectedIndex = index;
}

const Data = {
    "employees": [
      {
        "id": 1,
        "name": "John Doe",
        "position": "Software Developer",
        "department": "Engineering",
        "salary": 75000
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "position": "UI/UX Designer",
        "department": "Design",
        "salary": 60000
      },
      
    ]
  };
  
//Task-1

function calculateTotalSalary(data) {
    let totalSalary = 0;
    data.employees.forEach(employee => {
      totalSalary += employee.salary;
    });
    return totalSalary;
  }
console.log("Total Salary:", calculateTotalSalary(Data));


// Task-2
function getEmployeeById(data, employeeId) {
 let x = data.employees.find(employee => employee.id === employeeId);
 return x;
}
console.log("Employee details by given ID :", getEmployeeById(Data, 2));

//   Task-3
  function getDepartmentEmployeeCount(data) {
    const departmentCount = {};
  
    data.employees.forEach(employee => {
      const department = employee.department;
      departmentCount[department] = (departmentCount[department] || 0) + 1;
    });
  
    return departmentCount;
  }
  console.log("Department-wise Employee Count:", getDepartmentEmployeeCount(Data));
  
// Task-4

  function incrementSalary(data, employeeId, percentageIncrease) {
    const employeeIndex = data.employees.findIndex(employee => employee.id === employeeId);
  
    if (employeeIndex !== -1) {
      const currentSalary = data.employees[employeeIndex].salary;
      const newSalary = currentSalary * (1 + percentageIncrease / 100);
      data.employees[employeeIndex].salary = newSalary;
    }
  }
  incrementSalary(Data, 2, 10);
  console.log("Updated Salary (ID 2):", getEmployeeById(Data, 2).salary);
  
  
// Task-5
  function addNewEmployee(data, newEmployee) {
    data.employees.push(newEmployee);
  }
  const newEmployee = {
    "id": 3,
    "name": "Narendra",
    "position": "Software Developer",
    "department": "Engineering",
    "salary": 80000
  };
  addNewEmployee(Data, newEmployee);
  console.log("Updated Employee Data:", Data);

// //Displaying on UI
//     document.getElementById("totalSalary").innerText = "Total Salary: " + TotalSalary(Data);

//     const employeeDetails = getEmployeeById(Data, 1);
//     document.getElementById("employeeDetails").innerText = JSON.stringify(employeeDetails, null, 2);

//     const departmentEmployeeCount = getDepartmentEmployeeCount(Data);
//     document.getElementById("departmentEmployeeCount").innerText = JSON.stringify(departmentEmployeeCount, null, 2);

//     incrementSalary(Data, 2, 10);
//     document.getElementById("updatedSalary").innerText = "Updated Salary (ID 2): " + getEmployeeById(Data, 2).salary;

//     document.getElementById("updatedEmployeeData").innerText = JSON.stringify(Data, null, 2);
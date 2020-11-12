
    // populates a record from an Array
    // ✓ has a function called createEmployeeRecord
    // createEmployeeRecord
    //   ✓ populates a firstName field from the 0th element
    //   ✓ populates a familyName field from the 1th element
    //   ✓ populates a title field from the 2th element
    //   ✓ populates a payPerHour field from the 3th element
    //   ✓ initializes a field, timeInEvents, to hold an empty Array
    //   ✓ initializes a field, timeOutEvents, to hold an empty Array
let createEmployeeRecord = function(row) {
    return {
    firstName : row[0],
    familyName : row[1],
    title : row[2],
    payPerHour : row[3],
    timeInEvents : [],
    timeOutEvents : []
    }
}

// process an Array of Arrays into an Array of employee records
// ✓ has a function called createEmployeeRecords
// createEmployeeRecords
//   ✓ creates two records
//   ✓ correctly assigns the first names
//   ✓ creates more than 2 records
let createEmployeeRecords = function(rowData) {
    return rowData.map(function(row) {
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, data) {
    let [date, hour] = data.split(' ')

    employee.timeInEvents.push({
        type: 'TimeIn',
        date,
        hour: parseInt(hour, 10)
    })
    return employee
}


let createTimeOutEvent = function(employee, data) {
    let [date, hour] = data.split(' ')

    employee.timeOutEvents.push({
        type: 'TimeOut',
        date,
        hour: parseInt(hour, 10)
    })
    return employee
}

let hoursWorkedOnDate = function(employee, thisDate) {
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === thisDate
    })

    let outEvent = employee.timeOutEvents.find(function(e) {
        return e.date === thisDate
    })
    
    return (outEvent.hour - inEvent.hour) / 100
}
// input value getting
let nameInput = document.getElementById("name")
let ageInput = document.getElementById("age")
let maleInput = document.getElementById("male")
let femaleInput = document.getElementById("female")
let courseSelect = document.getElementById("course")
let emailInput = document.getElementById("email")
let savebtn = document.getElementById("btn")

// studentTable details
let studenttable = document.querySelector(".studenttable-detail")
let studentTableBody = document.getElementById("studentTableBody")

// for checking the form table
let studentForm = savebtn.closest('form')

// click button
savebtn.addEventListener("click", function(event){

    // save btn pop-up
    // event.preventDefault();

    // Check form Validity before proceeding
    if(!studentForm.checkValidity()){
        return
    }

    // studenttable
    studenttable.classList.add("studenttable-detail1")

    // tabledata
    let name = nameInput.value.trim()
    let age = ageInput.value.trim()
    let gender = maleInput.checked ? maleInput.value : (femaleInput.checked ? femaleInput.value: "Not Selected");
    let course = courseSelect.value
    let email = emailInput.value.trim()

    // alert message pop-up
    // if(!name || !age || !gender || !course || !email){
    //     alert("Add all Field's to Save the Data")
    //     return
    // }

    // creating new row to eneter the data
    let newRow = document.createElement("tr")

    // crating new table data to store the data
    let nameCell = document.createElement("td")
    nameCell.textContent = name
    nameCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(nameCell)

    let ageCell = document.createElement("td")
    ageCell.textContent = age
    ageCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(ageCell)

    let genderCell = document.createElement("td")
    genderCell.textContent = gender
    genderCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(genderCell)

    let courseCell = document.createElement("td")
    courseCell.textContent = course
    courseCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(courseCell)

    let emailCell = document.createElement("td")
    emailCell.textContent = email
    emailCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(emailCell)

    // create button in actioncell
    let actionCell = document.createElement("td")
    let deletebutton = document.createElement("button")
    deletebutton.textContent = "Delete"
    deletebutton.classList.add("bg-gray-700", "hover:bg-red-700", "text-white", "font-bold", "py-1", "px-2", "rounded-lg", "m-1")
    deletebutton.addEventListener("click", deleteItem)
    actionCell.appendChild(deletebutton)
    actionCell.classList.add("border", "border-gray-800", "px-2")
    newRow.appendChild(actionCell)


    // append new row for table
    studentTableBody.appendChild(newRow)


    // clearing input field
    nameInput.value=""
    ageInput.value=""
    maleInput.checked=false
    femaleInput.checked=false
    courseSelect.value=""
    emailInput.value=""

})

function deleteItem(event){
    event.target.parentElement.parentElement.remove()

}


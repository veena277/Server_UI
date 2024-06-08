
//(.)for class and (#) for id

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("open");
  const modalContainer = document.getElementById("modal_container");
  const modalContent = document.querySelector(".modal-content.create-employee");
  const createButton = document.getElementById("create");
  const createEmployeeForm = document.getElementById("createEmployeeForm");
  const employeeList = document.getElementById("employeeList");
  const loginModalContainer = document.getElementById("login_modal_container");
  const loginModalContent = document.querySelector(".modal-content.login");
  const loginButton = document.getElementById("login");
  const DeleteButton = document.getElementById("delete");

  
  openButton.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  DeleteButton.addEventListener("click", () => {
    employeeList.remove("div")
  });

  

  
  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  createButton.addEventListener("click", () => {
   
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (firstName && lastName) {
     
      const employeeCard = document.createElement("div");
      employeeCard.classList.add("employee-card");
      employeeCard.innerHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p>Employee</p>
      `;

      
      employeeCard.addEventListener("click", () => {
        loginModalContainer.classList.add("show");
      });

      employeeList.appendChild(employeeCard);

  
      createEmployeeForm.reset();

    
      modalContainer.classList.remove("show");
    } else {
      alert("Please enter both first and last names.");
    }
  });


  loginModalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  
  loginModalContainer.addEventListener("click", () => {
    loginModalContainer.classList.remove("show");
  });


  loginButton.addEventListener("click", () => {
 
    window.location.href = "interface.html";
  });
  
});



    const addTraineeLink = document.getElementById("addTrainee");
    const viewTraineeLink = document.getElementById("viewTrainee");
    const addTraineeForm = document.getElementById("addTraineeForm");
    const viewTraineeTable = document.getElementById("viewTraineeTable");
    const traineeForm = document.querySelector("#addTraineeForm form");

    const traineeData = []; // Array to store trainee information

    addTraineeLink.addEventListener("click", function(event) {
        event.preventDefault();
        addTraineeForm.style.display = "block";
        viewTraineeTable.style.display = "none"; // Hide the view table
        addProjectForm.style.display = "none"; // Hide the project form
        viewProjectTable.style.display = "none"; // Hide the project table
    });

    viewTraineeLink.addEventListener("click", function(event) {
        event.preventDefault();
        viewTraineeTable.style.display = "block";
        // viewProjectTable.style.margin = "auto";
        addTraineeForm.style.display = "none"; // Hide the add form
        addProjectForm.style.display = "none"; // Hide the project form
        viewProjectTable.style.display = "none"; // Hide the project table

        // Clear existing table rows
        while (viewTraineeTable.rows.length > 1) {
            viewTraineeTable.deleteRow(1);
        }

        // Populate the table with data from the array
        for (const trainee of traineeData) {
            const newRow = viewTraineeTable.insertRow();
            const cellName = newRow.insertCell(0);
            cellName.textContent = trainee.name;
            const cellId = newRow.insertCell(1);
            cellId.textContent = trainee.id;
            const cellUsername = newRow.insertCell(2);
            cellUsername.textContent = trainee.username;
            const cellProjectTitle = newRow.insertCell(3);
            cellProjectTitle.textContent = trainee.projectTitle;
            const cellDescription = newRow.insertCell(4);
            cellDescription.textContent = trainee.description;

        }
    });

    // Update references to the form elements by tag name
    // const traineeForm = document.querySelector("#addTraineeForm form");
    traineeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = traineeForm.elements.name.value;
        const id = traineeForm.elements.id.value;
        const username = traineeForm.elements.username.value;
        const projectTitle = traineeForm.elements.projectTitle.value;
        const description = traineeForm.elements.description.value;

        // Add data to the traineeData array
        traineeData.push({ name, id, username, projectTitle,description });

        // Clear form fields
        traineeForm.reset();
    });

    console.log(traineeData)







    const addProjectLink = document.getElementById("addProject");
    const viewProjectLink = document.getElementById("viewProject");
    const addProjectForm = document.getElementById("addProjectForm");
    const viewProjectTable = document.getElementById("viewProjectTable");
    const projectForm = document.querySelector("#addProjectForm form");

    const projectData = []; // Array to store trainee information

    addProjectLink.addEventListener("click", function(event) {
        event.preventDefault();
        addProjectForm.style.display = "block";
        viewProjectTable.style.display = "none"; // Hide the view table
        addTraineeForm.style.display = "none"; // Hide the trainee form
        viewTraineeTable.style.display = "none"; // Hide the trainee table
    });

    viewProjectLink.addEventListener("click", function(event) {
        event.preventDefault();
        viewProjectTable.style.display = "block";
        // viewProjectTable.style.margin = "auto";
        addProjectForm.style.display = "none"; // Hide the add form
        addTraineeForm.style.display = "none"; // Hide the trainee form
        viewTraineeTable.style.display = "none"; // Hide the trainee table
        

        // Clear existing table rows
        while (viewProjectTable.rows.length > 1) {
            viewProjectTable.deleteRow(1);
        }

        // Populate the table with data from the array
        for (const project of projectData) {
            const newRow = viewProjectTable.insertRow();
            const cellName = newRow.insertCell(0);
            cellName.textContent = project.pname;
            const cellDescription = newRow.insertCell(1);
            cellDescription.textContent = project.pdescription;
            const cellId = newRow.insertCell(2);
            cellId.textContent = project.lname;
            const startDate = newRow.insertCell(3);
            startDate.textContent = project.sdate;

        }
    });

    // Update references to the form elements by tag name
    // const projectForm = document.querySelector("#addProjectForm form");
    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const pname = projectForm.elements.pname.value;
        const pdescription = projectForm.elements.pdescription.value;
        const lname = projectForm.elements.lname.value;
        const sdate = projectForm.elements.sdate.value;

        // Add data to the traineeData array
        projectData.push({ pname, pdescription, lname, sdate});

        // Clear form fields
        projectForm.reset();
    });

    // console.log(traineeData)
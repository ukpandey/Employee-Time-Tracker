let projects = [];

function addProject() {
    const projectName = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const timeSpent = document.getElementById("timeSpent").value;
    const status = document.getElementById("status").value;

    const project = {
        projectName,
        description,
        startDate,
        endDate,
        timeSpent,
        status,
    };

    projects.push(project);
    displayProjects();
    clearForm();
}

function deleteProject(index) {
    projects.splice(index, 1);
    displayProjects();
}

function editProject(index) {
    const project = projects[index];
    
    const projectForm = document.createElement("tr");
    projectForm.innerHTML = `
        <td><input type="text" id="editProjectName" value="${project.projectName}"></td>
        <td><input type="text" id="editDescription" value="${project.description}"></td>
        <td><input type="date" id="editStartDate" value="${project.startDate}"></td>
        <td><input type="date" id="editEndDate" value="${project.endDate}"></td>
        <td><input type="number" id="editTimeSpent" value="${project.timeSpent}"></td>
        <td>
            <select id="editStatus">
                <option value="ongoing" ${project.status === 'ongoing' ? 'selected' : ''}>Ongoing</option>
                <option value="finished" ${project.status === 'finished' ? 'selected' : ''}>Finished</option>
            </select>
        </td>
        <td>
            <button onclick="saveEdit(${index})">Save</button>
            <button onclick="cancelEdit()">Cancel</button>
        </td>
    `;
    
    const projectsTableBody = document.getElementById("projects-table-body");
    projectsTableBody.innerHTML = "";
    projectsTableBody.appendChild(projectForm);
}

// ... (other functions)


function saveEdit(index) {
    const projectName = document.getElementById("editProjectName").value;
    const description = document.getElementById("editDescription").value;
    const startDate = document.getElementById("editStartDate").value;
    const endDate = document.getElementById("editEndDate").value;
    const timeSpent = document.getElementById("editTimeSpent").value;
    const status = document.getElementById("editStatus").value;

    projects[index] = {
        projectName,
        description,
        startDate,
        endDate,
        timeSpent,
        status,
    };

    displayProjects();
}

function cancelEdit() {
    displayProjects();
}

function displayProjects() {
    const projectsList = document.getElementById("projects-table-body");
    projectsList.innerHTML = "";

    if (projects.length === 0) {
        const newRow = projectsList.insertRow(0);
        const newCell = newRow.insertCell(0);
        newCell.colSpan = 7;
        newCell.classList.add("no-projects-message");
        newCell.textContent = `Have a cup of coffee ☕ and enjoy 🎉 no projects for you right now ${"\u23F0"}`;

    } else {
        projects.forEach((project, index) => {
            const newRow = projectsList.insertRow(-1);

            const nameCell = newRow.insertCell(0);
            nameCell.textContent = project.projectName;

            const descriptionCell = newRow.insertCell(1);
            descriptionCell.textContent = project.description;

            const startDateCell = newRow.insertCell(2);
            startDateCell.textContent = project.startDate;

            const endDateCell = newRow.insertCell(3);
            endDateCell.textContent = project.endDate;

            const timeSpentCell = newRow.insertCell(4);
            timeSpentCell.textContent = project.timeSpent;

            const statusCell = newRow.insertCell(5);
            statusCell.textContent = project.status;

            const actionsCell = newRow.insertCell(6);
            actionsCell.innerHTML = `
                <button class="edit" onclick="editProject(${index})">Edit</button>
                <button onclick="deleteProject(${index})">Delete</button>
            `;
        });
    }
}

function clearForm() {
    document.getElementById("projectName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("timeSpent").value = "";
    document.getElementById("status").value = "ongoing";
}

displayProjects();

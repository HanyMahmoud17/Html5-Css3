
      const form = document.getElementById("form");
      const input = document.getElementById("textVal");

      const containers = document.getElementsByClassName("tasksSections");
      const projects = JSON.parse(localStorage.getItem("projects")) || [];
      projects.forEach((project) => {
        addProjectToSection(project, "inProgressed");
      });

      form.addEventListener("submit", addProject);
      Array.from(containers).forEach((container) => {
        container.addEventListener("dragover", allowDrop);
        container.addEventListener("drop", dropProject);
      });

      function addProject(event) {
        event.preventDefault();
        const project = input.value;
        addProjectToSection(project, "inProgressed");
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));
      }

      function addProjectToSection(project, sectionId) {
        const section = document.getElementById(sectionId);
        const projectElement = document.createElement("p");
        projectElement.setAttribute("draggable", true);
        projectElement.setAttribute("id", `project-${Date.now()}`);
        projectElement.textContent = project;
        section.appendChild(projectElement);
        projectElement.addEventListener("dragstart", dragStart);
      }

      function allowDrop(event) {
        event.preventDefault();
      }

      function dropProject(event) {
        const projectId = event.dataTransfer.getData("text");
        const projectElement = document.getElementById(projectId);
        event.target.appendChild(projectElement);
      }
      
      function dragStart(event) {
        event.dataTransfer.setData("text", event.target.id);
      }
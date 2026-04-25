//Resuable function

function createSkillBar(skillName,percentage){
    const container = document.getElementById("skillsContainer");

    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const name = document.createElement("div");
    name.classList.add("skill-name");
    name.textContent = skillName;

    const fill = document.createElement("div");
    fill.classList.add("skill-fill");
    fill.textContent = percentage + "%";

    const bar = document.createElement("div");
    bar.classList.add("skill-bar");

    bar.appendChild(fill);
    skillDiv.appendChild(name);
    skillDiv.appendChild(bar);
    container.appendChild(skillDiv);
}

createSkillBar("HTML",90);
createSkillBar("Java",70);
createSkillBar("Python",65);
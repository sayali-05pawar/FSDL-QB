const skills = document.querySelectorAll(".skill-container");

skills.forEach(skill => {
    let name = skill.getAttribute("data-skill");
    let percent = skill.getAttribute("data-percent");

    // Create elements
    let title = document.createElement("div");
    title.className = "skill-name";
    title.innerText = name;

    let bar = document.createElement("div");
    bar.className = "skill-bar";

    let fill = document.createElement("div");
    fill.className = "skill-fill";
    fill.innerText = percent + "%";

    // Append structure
    bar.appendChild(fill);
    skill.appendChild(title);
    skill.appendChild(bar);

    // Animate width
    setTimeout(() => {
        fill.style.width = percent + "%";
    }, 100);
});
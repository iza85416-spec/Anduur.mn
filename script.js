function addHabit() {
    const input = document.getElementById("habitInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Дадлаа бичнэ үү!");
        return;
    }

    const ul = document.getElementById("habitList");
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${text}</span>
        <input type="checkbox" onchange="toggleHabit(this)">
    `;

    ul.appendChild(li);
    input.value = "";
}

function toggleHabit(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
}

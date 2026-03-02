const API_URL = "http://localhost:8080/api/tickets";

/* ---------------- NAVIGATION ---------------- */

function setActive(id) {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function showAll() {
    document.getElementById("allSection").style.display = "block";
    document.getElementById("submitSection").style.display = "none";
    document.getElementById("statsSection").style.display = "none";
    setActive("btnAll");
    loadTickets();
}

function showSubmit() {
    document.getElementById("allSection").style.display = "none";
    document.getElementById("submitSection").style.display = "block";
    document.getElementById("statsSection").style.display = "none";
    setActive("btnSubmit");
}

function showStats() {
    document.getElementById("allSection").style.display = "none";
    document.getElementById("submitSection").style.display = "none";
    document.getElementById("statsSection").style.display = "block";
    setActive("btnStats");
    loadStats();
}

/* ---------------- CREATE ---------------- */

function createTicket() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const status = document.getElementById("status").value;
    const priority = document.getElementById("priority").value;

    if (!title || !description) {
        alert("Please fill all fields!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            description,
            status,
            priority
        })
    })
    .then(res => res.json())
    .then(() => {
        alert("Ticket Submitted Successfully!");
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        showAll();
    })
    .catch(err => console.error(err));
}

/* ---------------- LOAD TICKETS ---------------- */

function loadTickets() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("tickets");
            container.innerHTML = "";

            data.forEach(ticket => {

                let statusClass = "";
                if (ticket.status === "OPEN") statusClass = "open";
                if (ticket.status === "IN_PROGRESS") statusClass = "inprogress";
                if (ticket.status === "CLOSED") statusClass = "closed";

                let priorityClass = ticket.priority.toLowerCase();

                container.innerHTML += `
                    <div class="ticket">
                        <h3>${ticket.title}</h3>
                        <p>${ticket.description}</p>

                        <span class="badge ${statusClass}">
                            ${ticket.status}
                        </span>

                        <span class="badge ${priorityClass}">
                            ${ticket.priority}
                        </span>

                        <div class="ticket-actions">
                            <button class="update-btn"
                                onclick="updateStatus(${ticket.id})">
                                Update Status
                            </button>

                            <button class="delete-btn"
                                onclick="deleteTicket(${ticket.id})">
                                Delete
                            </button>
                        </div>
                    </div>
                `;
            });
        });
}

/* ---------------- STATS ---------------- */

function loadStats() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("totalCount").innerText = data.length;
        });
}

function updateStatus(id) {
    const newStatus = prompt("Enter new status: OPEN / IN_PROGRESS / CLOSED");

    if (!newStatus) return;

    fetch(API_URL + "/" + id)
        .then(res => res.json())
        .then(ticket => {
            ticket.status = newStatus;

            fetch(API_URL + "/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(ticket)
            })
            .then(() => loadTickets());
        });
}

function deleteTicket(id) {
    if (!confirm("Are you sure?")) return;

    fetch(API_URL + "/" + id, {
        method: "DELETE"
    })
    .then(() => loadTickets());
}

/* Load initially */
window.onload = loadTickets;
/* =========================
   1. JAM DIGITAL OTOMATIS
========================= */

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);


/* =========================
   2. DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});


/* =========================
   3. PENCARIAN PERANGKAT
========================= */

const searchInput = document.getElementById("searchInput");
const deviceTable = document.getElementById("deviceTable");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", function() {

    const keyword = searchInput.value.toLowerCase();

    const rows = deviceTable.querySelectorAll("tr");

    let found = 0;

    rows.forEach(function(row) {

        const text = row.textContent.toLowerCase();

        if (text.includes(keyword)) {
            row.style.display = "";
            found++;
        } else {
            row.style.display = "none";
        }

    });

    noResult.style.display = found === 0 ? "block" : "none";

});


/* =========================
   4. DETAIL PERANGKAT
========================= */

const detailModal = document.getElementById("detailModal");
const modalName = document.getElementById("modalName");
const modalIP = document.getElementById("modalIP");
const modalStatus = document.getElementById("modalStatus");

document.querySelectorAll(".detail-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const device = button.dataset.device;
        const ip = button.dataset.ip;
        const status = button.dataset.status;

        modalName.textContent = device;
        modalIP.textContent = ip;
        modalStatus.textContent = status;

        detailModal.classList.add("show");

    });

});


/* =========================
   5. MENUTUP MODAL
========================= */

document.getElementById("closeModal").addEventListener("click", closeModal);

document.getElementById("closeButton").addEventListener("click", closeModal);

function closeModal() {
    detailModal.classList.remove("show");
}

detailModal.addEventListener("click", function(event) {

    if (event.target === detailModal) {
        closeModal();
    }

});


/* =========================
   6. TOMBOL REFRESH
========================= */

const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", function() {

    const icon = refreshBtn.querySelector("i");

    icon.classList.add("fa-spin");
    refreshBtn.disabled = true;

    setTimeout(function() {

        icon.classList.remove("fa-spin");
        refreshBtn.disabled = false;

        alert("Tampilan data berhasil diperbarui!");

    }, 1000);

});


/* =========================
   7. MENU SIDEBAR MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", function() {

    sidebar.classList.toggle("open");

});


// Menutup sidebar setelah menu dipilih

document.querySelectorAll(".menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelectorAll(".menu li").forEach(function(item) {
            item.classList.remove("active");
        });

        link.parentElement.classList.add("active");

        sidebar.classList.remove("open");

    });

});


/* =========================
   8. EFEK SAPAAN CONSOLE
========================= */

console.log("================================");
console.log("NETWORK MONITORING DASHBOARD");
console.log("Dashboard berhasil dijalankan!");
console.log("================================");
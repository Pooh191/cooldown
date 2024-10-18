function startCountdown() {
    const input = document.getElementById("cooldownDateTimeInput").value;
    const countdownDisplay = document.getElementById("countdown");

    if (!input) {
        showModal("กรุณาเลือกวันที่และเวลา"); // แสดงข้อความถ้าไม่เลือกวันเวลา
        return;
    }

    const countdownDate = new Date(input).getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // คำนวณวัน ชั่วโมง นาที และวินาที
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;

        // เมื่อถึงเวลา
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerHTML = "Cooldown เสร็จสิ้น!";
            showModal("Cooldown เสร็จสิ้น!"); // Popup แจ้งเตือนเมื่อเสร็จสิ้น
        }
    }, 1000);

    showModal(`เริ่มนับถอยหลังถึงวันที่: ${new Date(countdownDate).toLocaleString()}`); // Popup แสดงวันและเวลาที่เลือก
}

function showModal(message) {
    document.getElementById("modalMessage").innerText = message; // กำหนดข้อความใน modal
    document.getElementById("myModal").style.display = "block"; // แสดง modal
}

function closeModal() {
    document.getElementById("myModal").style.display = "none"; // ซ่อน modal
}

// ปิด modal เมื่อผู้ใช้คลิกนอก modal
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

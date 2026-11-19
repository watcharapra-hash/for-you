
const messages = [
    "วันนี้เธอเก่งมากแล้วนะ 💗",
    "พักบ้างก็ได้นะ คนเก่ง 🌷",
    "ขอให้พรุ่งนี้เป็นวันที่ใจดีกับเธอ 💕",
    "ไม่ต้องเก่งตลอดเวลาก็ได้นะ 🧸",
    "มีคนอยากเห็นเธอยิ้มอยู่นะ ☀️"
];

function showMessage() {
    const random = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerText =
        messages[random];
}


function openLetter() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}

function closeLetter() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
}


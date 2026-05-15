const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const link = document.getElementById("todayChallenge");

link.href = `https://www.freecodecamp.org/learn/daily-coding-challenge/${formattedDate}`;
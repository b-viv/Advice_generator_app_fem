const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");

const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
   setTimeout(() => { loader.style.display = "none" },
    2000); 
});
const fetchAdvice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        console.log(data);

        adviceId.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `${data.slip.advice}`;

    } catch (err) {
        console.log(err);
    }
    return;
};

window.onload = () => fetchAdvice();

adviceBtn.addEventListener("click", fetchAdvice);
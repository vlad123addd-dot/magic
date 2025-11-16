const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const questionBox = document.createElement("div");
questionBox.className = "question-box";
questionBox.textContent = "Введіть питання:";

const input = document.createElement("input");
input.placeholder = "Наприклад: Чи буде завтра сонячно?";

const button = document.createElement("button");
button.textContent = "Запитати";

const ball = document.createElement("div");
ball.className = "ball";

const answers = ["Yes", "No"];

button.onclick = () => {
    const text = input.value.trim();

    if (text.length < 3) {
        ball.textContent = "Коротко";
        return;
    }

    ball.classList.add("shake");
    setTimeout(() => ball.classList.remove("shake"), 400);

    const random = Math.floor(Math.random() * answers.length);
    ball.textContent = answers[random];
};

wrapper.appendChild(questionBox);
wrapper.appendChild(input);
wrapper.appendChild(button);
wrapper.appendChild(ball);
document.body.appendChild(wrapper);

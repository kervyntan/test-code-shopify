const alerter = () => {
    return alert("I'm Javascript!");
}

alerter();

const container = document.getElementById('container');

const textInsertHandler = (e) => {
    setInterval(this.textInsertHandler, 10000)
    container.innerHTML = "Daniel does absolutely fuck all";
}

window.addEventListener("click", textInsertHandler)

// event that takes place, then 2nd argument is the function that takes place upon eent taking place
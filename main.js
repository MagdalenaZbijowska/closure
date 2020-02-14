const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`hej ${userName}, ${userAge >= 18 ? "możesz wejść" : "nie możesz wejść"}`);
    }

    return showName;
}
const magda = user("Magda", 19);
const rafal = user("Rafał", 13);
magda();
rafal();

const noName = user();
noName();
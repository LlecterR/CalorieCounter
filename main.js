const btnMan = document.querySelector('.man');
const btnWoman = document.querySelector('.woman');
const radioInputs = document.getElementsByName('activity');
const btnSubmit = document.querySelector('.button__submit');
const btnReset = document.querySelector('.button__reset');
const result = document.querySelector('.result');

let gender = 'man';
let rateActivity;
let resultCalories;

btnMan.addEventListener('click', () => {
    btnMan.classList.add('checked');
    btnWoman.classList.remove('checked');
    gender = 'man';
});

btnWoman.addEventListener('click', () => {
    btnWoman.classList.add('checked');
    btnMan.classList.remove('checked');
    gender = 'woman';
});

btnReset.addEventListener('click', () => {
    result.classList.add('hidden');
});

const checkedActivity = () => {
    if (radioInputs[0].checked) {
        rateActivity = 1.2;
    } else if (radioInputs[1].checked) {
        rateActivity = 1.375;
    } else if (radioInputs[2].checked) {
        rateActivity = 1.55;
    } else if (radioInputs[3].checked) {
        rateActivity = 1.725;
    } else {
        rateActivity = 1.9;
    }
};

const counterColories = () => {
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    checkedActivity();

    if (gender === 'man') {
        resultCalories = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * rateActivity;
    } else {
        resultCalories = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * rateActivity;
    }
}

btnSubmit.addEventListener('click', () => {
    counterColories();
    result.classList.remove('hidden');
    result.innerHTML = `
        <h2 class="result__title">Ваша норма калорий:</h2>
        <p class="result__text">
        <strong>${Math.round(resultCalories)} ккал</strong>
        для поддержания веса
        </p>
        <p class="result__text">
        <strong>${Math.round(resultCalories * 0.9)} ккал</strong>
        для снижения веса
        </p>
        <p class="result__text">
        <strong>${Math.round(resultCalories * 1.1)} ккал</strong>
        для набора веса
        </p>`
});
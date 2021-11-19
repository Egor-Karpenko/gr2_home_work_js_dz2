let N = prompt('Количество километров', '0');
let D = prompt('Диаметр колеса в дюймах', '0');

N = Number(N);
D = Number(D);

if (isNaN(N) || isNaN(D)) {
    console.error('Не коректная запись');
} else {
    const METTERS_KILLOMETR = 1000;
    const METTERS_ICH = 0.0254;
    const PI = 3.14;

    N = N * METTERS_KILLOMETR;
    D = D * METTERS_ICH;
    let outcome = N / (D * PI);
    let outcome_2 = 4 * outcome;

    alert(`Ответ:  ${outcome} , ${outcome_2}`)
}
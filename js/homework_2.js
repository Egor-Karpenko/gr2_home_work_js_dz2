let days = prompt('Введите число');
days = Number(days);

if (isNaN(days)) {
    alert('Не являеться цифрой')

} else if (days % 100 === 11 || days % 100 === 12 || days % 100 === 13 || days % 100 === 14) {
    alert(`${days} Дней`)
} else if (days % 10 === 2 || days % 10 === 3 || days % 10 === 4) {
    alert(`${days} Дня`)
} else if (days % 10 === 5 || days % 10 === 6 || days % 10 === 7 || days % 10 === 8 || days % 10 === 9 || days % 10 === 0) {
    alert(`${days} Дней`)
} else if (days % 10 === 1) {
    alert(`${days} День`)
}

console.log('Конец')
window.location.reload()
const url = 'https://streamlabscharity.com/api/v1/causes/la-spa/live-spa-contre-labandon';
let lastPrice = '0';
let priceSpan;

document.addEventListener('DOMContentLoaded', function () {
    const xhr = new XMLHttpRequest();

    priceSpan = document.getElementById('money');

    xhr.open('GET', url, true);
    xhr.send();

    window.setInterval(function () {
        xhr.open('GET', url, true);
        xhr.send();
    }, 10000);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const body = JSON.parse(xhr.response);

            addMoney(body.amount_raised.toString());
        }
    }
});

function addMoney(amount) {
    if (amount === lastPrice) return;

    const moneyPrintEuros = amount.slice(0, -2);
    const moneyPrintCentimes = amount.slice(-2);

    priceSpan.textContent = moneyPrintEuros + ',' + moneyPrintCentimes;
}

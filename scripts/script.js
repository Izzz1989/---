const clients = [
    {
        firstName: "Александр",
        lastName: "Иванчук",
        date: "11-29-1990",
        phone: "8(929)988-90-09",
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: "Анатолий",
        lastName: "Стаценко",
        date: "02-12-1987",
        phone: "null",
        amounts: [563, 8287, 889]
    },
    {
        firstName: "Марина",
        lastName: "Петрова",
        date: "07-26-1997",
        phone: "8(899)546-09-08",
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: "Иван",
        lastName: "Караванов",
        date: "09-12-1999",
        phone: "null",
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: "Оксана",
        lastName: "Абрамова",
        date: "01-24-2002",
        phone: "8(952)746-99-22",
        amounts: [342, 766, 362]
    }
];

const newClient = {};

newClient.firstName = prompt("Ваше имя?");
newClient.lastName = prompt("Ваша фамилия?");
newClient.date = prompt("Ваша дата рождения (мм-дд-гггг)?");
newClient.phone = prompt("Ваш телефон?");
newClient.amounts = [];

while (confirm(`Добавить покупку для клиента ${newClient.firstName}?`)) {
    newClient.amounts.push(parseFloat(prompt("Сумма покупки")));
}

clients.push(newClient);

function fullName(client) {
    return `${client.firstName} ${client.lastName}`;
}

function getBirthday(dateString) {
    const params = {
        locale: 'ru-Ru',
        options: {
            day: 'numeric',
            month: 'long'
        }
    }
    const birthday = new Date(dateString).toLocaleString(params.locale, params.options);
    const today = new Date().toLocaleString(params.locale, params.options);

    return birthday === today ? `${birthday} (Сегодня)` : birthday;
}

function getAllAmount(amounts) {
    return amounts.reduce((sum, amount) => sum + amount);
}

function getAverageAmount(amounts) {
    if (amounts.length === 0) return 0;
    return parseFloat((getAllAmount(amounts) / amounts.length).toFixed(1));
}

const showClients = (clients) => {
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        const name = fullName(client);
        const averageAmount = getAverageAmount(client.amounts);
        const birthday = getBirthday(client.date);
        console.log(`Клиент ${name} имеет среднюю сумму чека ${averageAmount}. День рождения клиента: ${birthday}`);
    }
};

showClients(clients);

try {
    showClients();
} catch (error) {
    console.log("Вызвана функция без параметров");
    console.log(error.message);
}

const bestClients = [
    {
        firstName: "Василий",
        lastName: "Сергеев",
        date: "12-20-1959",
        phone: "8 (916) 344-87-77",
        amounts: [1200, 800, 400]
    },
    {
        firstName: "Светлана",
        lastName: "Говорова",
        date: "10-12-1980",
        phone: "8 (926) 945-95-93",
        amounts: [2100, 1500, 800, 1200]
    },
    {
        firstName: "Александр",
        lastName: "Чаусов",
        date: "01-01-1999",
        phone: "8 (916) 511-27-11",
        amounts: [7100, 3270, 4560, 7810]
    }
];

console.log("=== Лучшие клиенты ===");
showClients(bestClients);

setTimeout(() => {
    showClients(bestClients);
}, 3000);

const whoSpentMore = (clients) => {
    if (clients.length === 0) {
        console.log("Нет клиентов для анализа");
        return;
    }

    let maxAmount = 0;
    let topClient = null;

    for (const client of clients) {
        const totalAmount = getAllAmount(client.amounts);

        if (totalAmount > maxAmount) {
            maxAmount = totalAmount;
            topClient = client;
        }
    }

    console.log(`Больше всех потратил ${fullName(topClient)}. Сумма покупок: ${maxAmount}.`);
};

console.log("=== Анализ старых клиентов ===");
whoSpentMore(clients);

console.log("\n=== Анализ новых лучших клиентов ===");
whoSpentMore(bestClients);


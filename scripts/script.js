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

const newClient = Object();

newClient.firstName = prompt("Ваше имя?");
newClient.lastName = prompt("Ваша фамилия?");
newClient.date = prompt("Ваша дата рождения (мм-дд-гггг)?");
newClient.phone = prompt("Ваш телефон?");
newClient.amounts = [];

let add = true;
while (add) {
    add = confirm(`Добавить покупку для клиента ${newClient.firstName}?`)
};
if (add) {
    let amount = prompt ("Сумма покупки");
}
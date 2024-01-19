const unsortedExpenses = [
  "Еда",
  "Аренда",
  "Одежда",
  "Обучение",
  "Путешествия",
  "Развлечения",
  "Автомобиль",
];

const unsortedIncome = [
  "Зарплата",
  "Возврат налогов",
  "Пенсия",
  "Дивиденды",
  "Премия",
  "Стипендия",
  "Проценты по депозиту",
];
export const expCategories = unsortedExpenses.sort();
export const incCategories = unsortedIncome.sort();
export const payments = ["Наличные", "Карта"];

export const months = [
  { id: 0, value: "январь" },
  { id: 1, value: "февраль" },
  { id: 2, value: "март" },
  { id: 3, value: "апрель" },
  { id: 4, value: "май" },
  { id: 5, value: "июнь" },
  { id: 6, value: "июль" },
  { id: 7, value: "август" },
  { id: 8, value: "сентябрь" },
  { id: 9, value: "октябрь" },
  { id: 10, value: "ноябрь" },
  { id: 11, value: "декабрь" },
];

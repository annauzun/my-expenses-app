const Expense = (props) => {
    const { expense } = props
// текущая дата (дата и время, которая была в момент создания экземпляра объекта Date на локальном компьютере пользователя)
let currentDate = new Date().toLocaleDateString();
// например, выведем текущую дату в консоль
console.log(currentDate);
    return (
        <div className="bg-indigo-50 m-10 py-6 px-8 flex rounded-md shadow-md justify-between">
            <div className="flex flex-col items-start">
                <p className="w-10 text-lg">{currentDate}</p>
                <p>{expense.item}</p>
                <p>{expense.cost} ₽</p>
            </div>
            
            
        </div>
    )
}

export default Expense
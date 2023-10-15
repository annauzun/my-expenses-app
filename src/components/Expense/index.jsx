const Expense = (props) => {
    const { expense } = props
// текущая дата (дата и время, которая была в момент создания экземпляра объекта Date на локальном компьютере пользователя)
let currentDate = new Date().toLocaleDateString();
// например, выведем текущую дату в консоль
console.log(currentDate);
    return (
        <div className="bg-white border-b-2 py-4 px-8 flex justify-between">
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-start">
                    <p className="text-md rounded-xl bg-green-200 px-2">{currentDate}</p>
                    <p className="text-xl text-gray-700">{expense.category}</p>
                    <p className="text-md text-gray-700">{expense.payment}</p>
                </div>
                <p>- {expense.cost} ₽</p>
            </div>
            
            
        </div>
    )
}

export default Expense
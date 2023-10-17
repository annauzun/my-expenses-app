import Button from "components/Button"
import { useState } from "react"

const unsortedItems = ['Еда', 'Аренда', 'Одежда', 'Обучение', 'Путешествия', 'Развлечения', 'Автомобиль']
const categories = unsortedItems.sort()
const payments = ['Наличные', 'Карта']

const ExpenseForm = ({addExpense}) => {

    const [cost, setCost] = useState('')
    const [category, setCategory] = useState(categories[0]) 
    const [payment, setPayment] = useState(payments[0])

    const handleClick = event => {
        event.preventDefault()
        const expense = {
            cost,
            category,
            payment
        }

        addExpense(expense)
        setCost('')
        setCategory(categories[0]) 
        setPayment(payments[0])
    }

    
    return (
        <div>
            <form className="max-w-sm mx-10 mt-2 mb-10 gap-y-4 flex flex-col">
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Сумма</label>
                    <input 
                        onChange={(event) => setCost(event.target.value)}
                        
                        name="cost" 
                        type="number" 
                        className="col-span-2 border border-solid border-gray-400 rounded"/>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Категория</label>
                    <select 
                        value={category} 
                        onChange={(event) => setCategory(event.target.value)}
                        className="col-span-2 border border-solid border-gray-400 rounded">
                        {categories.map(category => {
                            return (
                                <option key={category}>{category}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Оплата</label>
                    <select 
                        value={payment} 
                        onChange={(event) => setPayment(event.target.value)}
                        className="col-span-2 border border-solid border-gray-400 rounded">
                        {payments.map(payment => {
                            return (
                                <option key={payment}>{payment}</option>
                            )
                        })}
                    </select>
                </div>
                <Button title='Добавить в расходы' handleClick={handleClick} type="submit" />
            </form>    
        </div>
    )
}
export {categories}
export default ExpenseForm
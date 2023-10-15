import Button from "components/Button"
import { useState } from "react"


const unsortedItems = ['Еда', 'Аренда', 'Одежда', 'Обучение', 'Путешествия', 'Развлечения', 'Автомобиль']
const items = unsortedItems.sort()
const ExpenseForm = ({addExpense}) => {

    const [cost, setCost] = useState('')
    const [item, setItem] = useState(items[0]) 

    const handleClick = event => {
        event.preventDefault()
        const expense = {
            cost,
            item
        }

        addExpense(expense)
        setCost('')
        setItem(items[0]) 
    }

    
    return (
        <div>
            <form className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col">
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Сумма</label>
                    <input 
                        onChange={(event) => setCost(event.target.value)}
                        value={cost} 
                        name="cost" 
                        type="number" 
                        className="col-span-2 border border-solid border-gray-400 rounded"/>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Категория</label>
                    <select 
                        value={item} 
                        onChange={(event) => setItem(event.target.value)}
                        className="col-span-2 border border-solid border-gray-400 rounded">
                        {items.map(item => {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <Button title='Добавить в расходы' handleClick={handleClick} type="submit" />
            </form>    
        </div>
    )
}

export default ExpenseForm
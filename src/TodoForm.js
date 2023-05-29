import { useState } from "react"
import useItemsContext from "./hooks/use-hooks-context"

export default function TodoForm() {
    const [title, setTitle] = useState('')
    const {createItem} = useItemsContext()

    const handleNameChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(title.trim() === '')
        return;

        createItem(title)
        setTitle('')
    }


    return (
        <div className="flex flex-col text-lg m-5 p-5">
        <h1 className="text-3xl m-3">Add Item:</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <input value={title || ''} onChange={handleNameChange} placeholder="ToDo item" className="shadow appearance-none border rounded w-full py-
                    2 px-3 mr-4 text-grey-darker" />
                    <button className="flex-no-shrink m-2 p-2 border-2 rounded text-teal bg-white border-teal hover:text-emerald-700 hover:bg-teal">Add</button>
                </div>
            </div>
        </form>
        <div>
    
    </div>
        </div>
    )
    
}

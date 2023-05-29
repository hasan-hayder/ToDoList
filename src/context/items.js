import { createContext, useState, useEffect } from "react";

const ItemsContext = createContext();
let nextId = 0;

function Provider({children}) {
    const [items, setItems] = useState([]);
    const createItem = (name) => {
        setItems([...items, {id: nextId++, name: name} ])
    }

    const deleteItemById = (id) => {

        const updatedItems = items.filter((item) => {
            return item.id !== id
        })
        setItems(updatedItems);
    }

    useEffect(() => {
        console.log(items)
    }, [items])

    const contextValue = { createItem, deleteItemById, items };

    return <ItemsContext.Provider value={contextValue}>
        {children}
    </ItemsContext.Provider>
    
}

export {Provider};
export default ItemsContext;
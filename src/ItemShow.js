import { useContext } from 'react'
import {Item, ListView, Text, ActionButton} from '@adobe/react-spectrum'
import Delete from '@spectrum-icons/workflow/Delete'
import ItemsContext from './context/items'


function ItemShow({item}) {


const { deleteItemById } = useContext(ItemsContext)

    const handleRemove = () => {
        deleteItemById(item.id)
    }

    let content = (
    <ListView
         selectionMode="multiple"
         aria-label="Static ListView items example"
         maxWidth="size-6000">
         <Item>
            <Text>{item.name}</Text>
            <ActionButton aria-label="Icon only" onPress={handleRemove}>
                <Delete />
                </ActionButton>
         </Item>;

    </ListView>
)
    

    return <div>{content}</div>


}

export default ItemShow
import ItemShow from "./ItemShow";
import useItemsContext from "./hooks/use-hooks-context";

function ItemsList() {
const {items} = useItemsContext()
    const renderedItems = items.map((item) => {
        return <ItemShow key={item.id} item={item} />
    })
return(
    <div className="p-5">
        {renderedItems}
    </div>
)
}

export default ItemsList
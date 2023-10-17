import './List.css';
import TO_DOS from "../mocks/todos";
import ToDo from "./ToDo";
import {useState} from "react";
import Input from "./Input";


export function List()  {
    const [listItems, setListItems] = useState(TO_DOS);

    // let listItems = TO_DOS;
    function removeItem(label) {
        let filteredItems = listItems
            .filter(item => item.label !== label);
        setListItems(filteredItems);
    }
    function addItem(newLabel) {
        setListItems([...listItems, {label: newLabel}]);
    }

    return (
        <div>
            <Input onInputValueChanged={addItem}></Input>

            {listItems.map(i =>
                <ToDo key={i.label}
                      label={i.label} date={i.date}
                      onToDoRemoveClick={removeItem}>
            </ToDo>)}
        </div>
    );
}

export default List;
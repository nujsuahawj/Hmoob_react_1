import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from "uuid";
const Transaction = (props)=>{
    const {items} = props
    return (
      <ul className="item-list">
          {items.map((element)=>{
              return <Item {...element} key={element.id}/>
          })}
      </ul>
    );
}

export default Transaction
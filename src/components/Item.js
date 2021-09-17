import {Badge, Button} from 'react-bootstrap';


export const Item = (props) => { 
    let price=10;   
    
    return (
        <>
        <tr>
                <td>{props.item.id}</td>
                <td>{props.item.item}</td>
                <td>{props.item.value}</td>
                <td>{price } Rs.</td>
                <td><button type="button" className="btn bg-transparent btn-outline" onClick={()=> {props.inc(props.item)}}><Badge bg="success">+</Badge></button></td>
                <td><button type="button" className="btn bg-transparent btn-outline" onClick={()=> {props.desc(props.item)}} disabled={! props.item.value} ><Badge bg="primary">-</Badge></button></td>
                <td><Button variant="danger" size="sm" onClick={() => props.onDelete(props.item)}>Remove from cart</Button></td>
              </tr>
        </>
    )
}

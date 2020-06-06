import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiOutlineDownSquare } from 'react-icons/ai';
import { AiOutlineUpSquare } from 'react-icons/ai';

export default function CartItem({cartItem,increment,decrement,remove}) {
    const { id, price, count, name, images, totalPrice } = cartItem;
    
    
    const styledTD = {
       ["font-size"]: "20px",
       ["font-weight"]: "600"
      }

      const styledRemoveButton = {
        ["cursor"]: "pointer",
        float: 'right'
      }

    return (
        <>
            <tr>
                <td width="20%"> <img style={{width: '70%', height: '20 %'}} src={images[0]} alt=""/> </td>
                <td width="50%">{name}</td>
                <td>${price}</td>
                <td style={styledTD}> <AiOutlineDownSquare onClick={() => decrement(id)} className="ArrowDropdownCircle" size={30}/> {count} <AiOutlineUpSquare onClick={() => increment(id)} className="ArrowDropupCircle" size={30}/> </td>
                <td>${totalPrice} <AiFillMinusCircle  onClick={() => remove(id)} style={styledRemoveButton} size={22}/> </td>
            </tr>
        </>
    )
}



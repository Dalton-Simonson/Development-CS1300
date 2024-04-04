import "./CartItem.css"

export default function CartItem(props){

    if(props.show_in_cart == false){
        return null
    }

    return(
        <div className="cartItem">
            <button className="minusButton" onClick={() => props.decrementCount(props.item, props.price)}>-</button>
            <h3 className="cartItemBookName">{props.name} x {props.number_in_cart}</h3>
            <button className="plusButton" onClick={() => props.incrementCount(props.item, props.price)} >+</button>
            <h3 className="cartItemTotalPrice">${Number((props.price * props.number_in_cart).toFixed(2))}</h3>
          </div>
    );
}
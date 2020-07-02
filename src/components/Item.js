import React from "react"

function Item(props) {

    const isDone = () => {
        if(props.item.completed === true){
            return(
                <>
                <input type="checkbox" checked="true"/> <s>{props.item.text} </s>
                <br/>
                </>
            )
        }
        else{
            return(
                <>
                <input type="checkbox"/> {props.item.text}
                <br/>
                </>
            )
        }
    }

    return (
        <>
            {isDone()}
        </>

    );
}

export default Item;
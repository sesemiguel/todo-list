import React from "react"

class Item extends React.Component {

    render() {

        return (
            <>
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed} 
                    onChange={() => console.log("This has been changed")}
                />
                <p>{this.props.item.text}</p>
                <br />
            </>
        )
    }
}

export default Item;
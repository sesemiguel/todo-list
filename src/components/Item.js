import React from "react"

class Item extends React.Component {

    render() {
        const isDone = () => {
            if (this.props.item.completed === true) {
                return (
                    <>
                        <input type="checkbox" checked="true" /> <s>{this.props.item.text} </s>
                        <br />
                    </>
                )
            }
            else {
                return (
                    <>
                        <input type="checkbox" /> {this.props.item.text}
                        <br />
                    </>
                )
            }
        }

        return (
            <>
                {isDone()}
            </>
        )
    }
}

export default Item;
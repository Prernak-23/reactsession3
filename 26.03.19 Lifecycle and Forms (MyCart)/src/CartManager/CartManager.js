import React, { Component } from "react";
import Cart from "./../Cart/Cart";
import CartTotal from "./../Total/Total";
import AddItem from "./../Items/AddItem";
import "./CartManager.css";

export class CartManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: "Veg Pizza",
                    quantity: 2,
                    price: 30,
                    index: 0
                },
                {
                    name: "Corn Sandwich",
                    quantity: 1,
                    price: 35,
                    index: 1
                },
                {
                    name: "Rajma Rice",
                    quantity: 4,
                    price: 50,
                    index: 2
                }
            ]
        };
    }


    handleRemove = (index) => {
        const newItems = this.state.items.map(element => {
            if (element.index === index) {
                if (element.quantity > 0) {
                    element.quantity = element.quantity - 1;
                }
                else if (element.quantity <= 0) {
                    element.quantity = 0;
                }
            }
            return element;
        });

        this.setState({
            items: newItems
        });
    }


    handleAdd = (index) => {
        const newItems = this.state.items.map(element => {
            if (element.index === index) {
                element.quantity = element.quantity + 1;
                return element;
            }
            return element;
        });
        this.setState({
            items: newItems
        });
    }
    handleDelete = (index) => {


        const newItems = this.state.items.filter(element => {

            if (element.index !== index) {

                return element;
            }
        });

        this.setState({
            items: newItems
        });

    }
    handleAddItem = (event, item) => {
        event.preventDefault();
        let findItem = () => {
            let index = -1;
            this.state.items.forEach(element => {
                if (element.name === item.name) {
                    index = element.index
                }
            }
            )
            return index;

        }

        let findItemIndex = findItem();
        let newItems = this.state.items.slice();
        if (findItemIndex === -1) {
            item["index"] = this.state.items.length + 1
            item["quantity"] = 1

            newItems.push(item);
            this.setState({
                items: newItems
            })
        }
        else {

            newItems[findItemIndex].quantity += 1;
            newItems[findItemIndex].price = item.price;
            this.setState({
                items: newItems
            })
        }

    }
    getTotal() {
        let total = this.state.items.reduce((accumulator, element) =>
            accumulator + (element.price * element.quantity), 0)
        return total;
    }
    render() {
        return (
            <div>
                <AddItem handleAddItem={this.handleAddItem} />

                <table>
                    <tbody>
                        <tr>
                            <th>Dish Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Remove</th>
                            <th>Add</th>
                            <th>Delete</th>
                        </tr>

                        {this.state.items.map((item, index) => {
                            return (

                                <Cart
                                    data={item}
                                    handleRemove={this.handleRemove}
                                    handleAdd={this.handleAdd}
                                    handleDelete={this.handleDelete}
                                    key={index}
                                />

                            );
                        })}
                    </tbody>
                </table>
                {/* <ErrorBoundary>  */}
                <CartTotal total={this.getTotal()} />
                {/* </ErrorBoundary>  */}
            </div>
        );
    }
}

export default CartManager;

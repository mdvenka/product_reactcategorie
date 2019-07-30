import React, { Component } from 'react';
import axios from 'axios';

export default class Display extends Component {
    state = {
        products: [],
        add_categorie:[],
        add_products:[],

    }

    showProducts(id) {
        console.log("we are seeing the id")
        console.log(id);
        axios.get(`http://localhost:4000/category/${id}`).then((res) => {
            console.log(res.data)

            this.setState({
                products: res.data
            })
            console.log("we are seeing the products here ")
            console.log(this.state.products)
        })

    }

    addCategorie(event) {
        console.log(event.target.value)
        // this.setState({add_categorie: event.target.value});
        // console.log(this.state.add_categorie)
    }

    updateProduct(id) {
        console.log(id)
        axios.put(`http://localhost:4000/updateproduct/${id}`).then((res) => {
            console.log("we are seeing the product ids here ")
            console.log(res)

            // this.setState({
            //     products: res.data
            // })
            // console.log("we are seeing the products here ")
            // console.log(this.state.products)
        })
        

    }

    render() {
        return (
            <div className="App">
                <div class="container">
                    <form>
                    <label htmlFor="test">AddCategorie</label>
                    <input className="form-control" type="text" placeholder="AddCategorie" aria-label="Search" id="test" value={this.state.value} />
                    </form>
                    <button type="button" className="btn btn-primary btn-sm  text-right"  form="test" onClick= {this.addCategorie}>Add categorial</button>
                    <div class="row">
                        <div class="col-md">
                            <th>Categorial</th>
                            <div>
                                <p>{this.props.categorial ? this.props.categorial.map((cat) => {
                                    return (
                                        <div>
                                            <p>{cat.category}</p>
                                            <button type="button" className="btn btn-primary btn-sm  text-right" >update</button>
                                            <button type="button" className="btn btn-danger btn-sm  text-right">delete</button>
                                            <button type="button" className="btn btn-secondry btn-sm  text-right" onClick={() => this.showProducts(cat._id)}>showproducts</button>
                                        </div>
                                    )
                                }) : <div>Nocategories</div>}
                                </p>

                            </div>
                        </div>
                        <div class="col-md">
                            <th>Products</th>
                            <div>
                                <p>{this.state.products? this.state.products.map((pro) => {
                                    return (
                                        <div>
                                            <p>{pro.product}</p>
                                            <button type="button" className="btn btn-primary btn-sm  text-right" onClick={()=>this.updateProduct(pro._id)} >update</button>
                                            <button type="button" className="btn btn-danger btn-sm  text-right" >delete</button>
                                        </div>
                                    )
                                }) : <div>No products</div>} 
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

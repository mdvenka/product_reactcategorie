import React, { Component } from 'react';

export default class Display  extends Component {
  
    render() {
        return (
            <div className="App">

                <div class="container">
                    <input class="form-control" type="text" placeholder="Add" aria-label="Search" />
                    <button type="button" className="btn btn-primary btn-sm  text-right" >Add categorial</button>
                    <button type="button" className="btn btn-secondry btn-sm text-left" float="right">Add Products</button>
                    <div class="row">
                        <div class="col-md">
                            <th>Categorial</th>
                            <div>
                                <p>{this.props.categorial.map((cat) =>{
                                    return (
                                    <div>
                                         <p>{cat}</p>
                                          <button type="button" className="btn btn-primary btn-sm  text-right" >update</button>
                                          <button type="button" className="btn btn-danger btn-sm  text-right" >delete</button>
                                          </div>
                                )})}
                                </p>

                            </div>
                        </div>
                        <div class="col-md">
                            <th>Products</th>
                            <div>
                                <p>{this.props.products.map((pro)=>{
                                    return(
                                        <div>
                                        <p>{pro}</p>
                                          <button type="button" className="btn btn-primary btn-sm  text-right" >update</button>
                                          <button type="button" className="btn btn-danger btn-sm  text-right" >delete</button>
                                          </div>
                                    )
                                })}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

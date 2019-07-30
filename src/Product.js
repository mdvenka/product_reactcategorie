import React, { Component } from 'react';
import Display from './Display';
import axios from 'axios';

export default class Categorial extends Component {


    state = {
        categorial_data: [],
        product: [],
        // categorial: ['ttt', 'yyy']
    };
    showProducts  (id)  {

    }
    componentWillMount() {
        axios.get(`http://localhost:4000/getcategorielproducts`)
            .then((response) => {
                console.log('//////////////////////');
                console.log(response)

                let  categorie_data = response.data.map((data) => {
                    return (data)

                });


                console.log("we are seeing ")
                console.log(categorie_data);

                this.setState({
                    categorial_data: categorie_data
                })
                console.log("we are seeing the data which is comming from categeriel")
                // console.log(this.state.categorial_data[0].category)
                   console.log(this.state.categorial_data.map((datas)=>{
                      console.log(datas.category)
                      console.log(datas._id)
                   }))
            })
            .catch(function (error) {
                console.log(error);
            })

            // axios.get(`http://localhost:4000/category/${id}`)
            // .then((response) => {
            //     console.log('//////////////////////');
            //     console.log(response)
            //     this.setState({
            //         product: res.data
            //     })
            // })
            // .catch(function (error) {
            //     console.log(error);
            // })

    }


    render() {

        console.log(this.state.categorial)
        return (
            <div>
                <Display products={this.state.product} categorial={this.state.categorial_data} />
            </div>
        )
    }
}

// {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>

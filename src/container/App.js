import React, { Component } from 'react';

import '../container/App.scss';
import Navbar from '../components/Navbar/navbar';
// import Category from '../components/Category/category';
// import CardItem from '../components/CardItem/cardItem';
import ListItem from '../components/ListItem/listItem';
// import personal from '../img/PersonalImage.png';
import { BrowserRouter, Route } from 'react-router-dom';
import AddProduct from '../components/AddProduct/addProduct';
import DetailsItem from '../components/Details/details';

class App extends Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous">
        </link>
        <BrowserRouter>
          <div>
            <Navbar></Navbar>
            <div className="App">
              <div class="container">
                {/* <Category></Category> */}
                {/* <ListItem></ListItem> */}
                {/* <AddProduct></AddProduct> */}
                {/* <DetailsItem></DetailsItem> */}
              </div>
            </div>
            <Route path="/" exact="" component={ListItem}></Route>
            <Route path="/home" component={ListItem}></Route>
            <Route path="/listItem" component={ListItem}></Route>
            <Route path="/addProduct" component={AddProduct}></Route>
            <Route path="/detailProduct/:id" component={DetailsItem}></Route>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

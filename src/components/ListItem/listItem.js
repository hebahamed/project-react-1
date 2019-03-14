import React, { Component } from 'react';
import CardItem from '../CardItem/cardItem';
import Category from '../Category/category';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import Paging from '../Paging/paging';

export class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: {}
        }
    }

    // changePageHandler(){

    // }
    render() {
        let indexOfLast = this.props.currentPage * this.props.productsPerPage;
        let indexOfFirst = indexOfLast - this.props.productsPerPage;
        let productsPage = this.props.products.slice(indexOfFirst, indexOfLast);

        console.log(this.props.product)
        console.log(this.props)
        return (
            <>
                <div class="container">

                    <Category></Category>
                    <section class="item-listing">

                        <div class="item-listing__tools">
                            <select class="form-control" name="" id="">
                                <option value="1">Featured</option>
                                <option value="2">Price low to high</option>
                                <option value="3">Price high to low</option>
                                <option value="4">Name</option>
                            </select>
                            <a class="action-btn" href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                        <div class="item-listing__items item-listing--3items" style={{ width: "100%" }}>
                            {productsPage.map((product, index) => {
                                return (
                                    <CardItem
                                        id={product.id}
                                        name={product.name}
                                        image={product.image}
                                        sale={product.sale}
                                        price={product.price}
                                        key={product.name}
                                        priceAfterSale={product.priceAfterSale}
                                        deleted={() => this.props.onDelete(index)}
                                    ></CardItem>)
                            })}
                        </div>
                        <Paging></Paging>
                    </section>
                </div>
            </>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentPage: state.currentPage,
        productsPerPage: state.productsPerPage,
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {

    return {
        onDelete: (id) => dispatch({ type: actionTypes.DELETE, id: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
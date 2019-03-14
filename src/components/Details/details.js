import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
class DetailsItem extends Component {

    state = {
        product: {}
    }
    componentDidMount() {

        this.props.showProduct(this.props.match.params.id);
    }

    render() {
        console.log(this.props.product);
        return (
            <>
                <div class="product-details container">
                    <section class="product-details__main">
                        {/* <!-- images slider --> */}
                        <div class="slider">
                            <div class="slider__items">
                                <div class="slider__item active" style={{ backgroundImage: `url(${this.props.product.image})` }}></div>
                                <div class="slider__item" style={{ backgroundImage: `url(${this.props.product.image})` }}></div>
                                <div class="slider__item" style={{ backgroundImage: `url(${this.props.product.image})` }}></div>
                            </div>
                            <div class="slider__indicators">
                                <span class="slider__indicator active"></span>
                                <span class="slider__indicator"></span>
                                <span class="slider__indicator"></span>
                            </div>
                        </div>
                        {/* <!-- product info --> */}
                        <div class="product-details__info">
                            <h1>{this.props.product.name}</h1>
                            <div class="rating">
                                <div class="rating__stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <div class="rating__data">
                                    2 reviews
                    </div>
                            </div>
                            <div class="product-details__amount">
                                ${(this.props.product.priceAfterSale === null) ? this.props.product.price : this.props.product.priceAfterSale}

                            </div>

                            <p class="product-details__desc">
                            {this.props.product.description}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing.
                                Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh
                                sed elimttis adipiscing. Fusce in hendrerit purus.
                </p>
                            <div class="product-details__add">
                                <div class="increment-control">
                                    <a href="#" class="increment-control__action">-</a>
                                    <input type="text" class="form-control" title="Qty" value="1" />
                                    <a href="#" class="increment-control__action">+</a>
                                </div>
                                <button href="#" class="btn btn--primary">Add to cart</button>
                            </div>
                            <div class="product-details__meta">
                                Categories: <a rel="tag" href="#">{this.props.product.category}</a>.
                </div>
                        </div>
                    </section>
                    <section class="tabs">
                        <div class="tabs__headers">
                            <div class="tabs__header active">
                                Description
                </div>
                            <div class="tabs__header">
                                Additional Information
                </div>
                            <div class="tabs__header">
                                Reviews (2)
                </div>
                        </div>
                        <div class="tabs__bodies">
                            <div class="tabs__body active">
                                <div class="product-details__desc">
                                    <p>
                                       
                        </p>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit,
                                        mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis
                                        dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                                </div>
                            </div>
                            <div class="tabs__body ">
                                tab2
                </div>
                            <div class="tabs__body">
                                tab3
                </div>
                        </div>
                    </section>
                    <div class="separator"></div>
                    {/* <!-- related products --> */}
                    <section class="realated-product">
                        <h3>Related <strong>Products</strong></h3>
                        <div class="item-listing__items item-listing--4items">
                            {/* <!-- medium item --> */}
                            <div class="item-medium-1">
                                <div class="item-medium-1__image image" style={{ backgroundImage: `url(${this.props.product.image})` }}>
                                {/* <div class="item-medium-1__alert">Sale</div> */}
                                {(this.props.product.sale===null) ? null : <div class="item-medium-1__alert">Sale</div>}
                                    <a href="#" class="item-medium-1__action">Add to Cart</a>
                                </div>
                                <a href="#">
                                    <h4>{this.props.product.name}</h4>
                                    <div>
                                        {(this.props.product.sale === null) ? <span>${this.props.product.price}</span> : <del>${this.props.product.price}</del>}
                                        {(this.props.product.sale === null) ? <span class="lable"></span> : <span class="lable">${this.props.product.priceAfterSale}</span>}
                                    </div>
                                </a>
                                <div class="crud-actions">
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                            <div class="item-medium-1">
                            {/* <div class="item-medium-1__alert">Sale</div> */}
                            {(this.props.product.sale===null) ? null : <div class="item-medium-1__alert">Sale</div>}
                                <div class="item-medium-1__image image" style={{ backgroundImage: `url(${this.props.product.image})` }}>
                                    <a href="#" class="item-medium-1__action">Add to Cart</a>
                                </div>
                                <a href="#">
                                    <h4>{this.props.product.name}</h4>
                                    <div>
                                        {(this.props.product.sale === null) ? <span>${this.props.product.price}</span> : <del>${this.props.product.price}</del>}
                                        {(this.props.product.sale === null) ? <span class="lable"></span> : <span class="lable">${this.props.product.priceAfterSale}</span>}
                                    </div>
                                </a>
                                <div class="crud-actions">
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                            <div class="item-medium-1">
                                {/* <div class="item-medium-1__alert">Sale</div> */}
                                {(this.props.product.sale===null) ? null : <div class="item-medium-1__alert">Sale</div>}
                                <div class="item-medium-1__image image" style={{ backgroundImage: `url(${this.props.product.image})` }}>
                                    <a href="#" class="item-medium-1__action">Add to Cart</a>
                                </div>
                                <a href="#">
                                    <h4>{this.props.product.name}</h4>
                                    <div>
                                        {(this.props.product.sale === null) ? <span>${this.props.product.price}</span> : <del>${this.props.product.price}</del>}
                                        {(this.props.product.sale === null) ? <span class="lable"></span> : <span class="lable">${this.props.product.priceAfterSale}</span>}
                                    </div>
                                </a>
                                <div class="crud-actions">
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                            <div class="item-medium-1">
                                {/* <div class="item-medium-1__alert">Sale</div> */}
                                {(this.props.product.sale===null) ? null : <div class="item-medium-1__alert">Sale</div>}
                                <div class="item-medium-1__image image" style={{ backgroundImage: `url(${this.props.product.image})` }}>
                                    <a href="#" class="item-medium-1__action">Add to Cart</a>
                                </div>
                                <a href="#">
                                    <h4>{this.props.product.name}</h4>
                                    <div>
                                        {(this.props.product.sale === null) ? <span>${this.props.product.price}</span> : <del>${this.props.product.price}</del>}
                                        {(this.props.product.sale === null) ? <span class="lable"></span> : <span class="lable">${this.props.product.priceAfterSale}</span>}
                                    </div>
                                </a>
                                <div class="crud-actions">
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- footer --> */}
                <div class="footer">
                    {/* <!-- subscription --> */}
                    <div></div>
                    {/* <!-- menu --> */}
                    <div></div>
                    {/* <!-- contact info --> */}
                    <div></div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showProduct: (id) => dispatch({ type: actionTypes.SHOW, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsItem);
import React, { Component } from 'react';
import addImage from '../../img/products/product-grey-7.jpg';
import '../../css/style.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import { Redirect } from 'react-router-dom'

class AddProduct extends Component {

    state = {
        image: addImage,
        checkBoxs: []
    }

    checkHandler = (event) => {
        let checkBoxsArr = [...this.state.checkBoxs]
        checkBoxsArr.push(event.target.name)
        this.setState({
            checkBoxs: checkBoxsArr
        })
    }
    render() {
        return (
            <>
                {/* <!-- add Item --> */}
                <div className="add-product container">
                    <form action="">
                        <div className="add-product__images slider">
                            <div className="add-product__image-actions">
                                <div className="add-product__image-action">
                                    <a href="#"><i className="fas fa-plus-square"></i></a>
                                    <a href="#"><i className="fas fa-edit"></i></a>
                                    <a href="#"><i className="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                            <div className="slider__items">
                                <div className="slider__item active" style={{ backgroundImage: `url(${addImage})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${addImage})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${addImage})` }}></div>
                            </div>
                            <div className="slider__indicators">
                                <span className="slider__indicator active"></span>
                                <span className="slider__indicator"></span>
                                <span className="slider__indicator"></span>
                            </div>
                        </div>
                        <div className="add-product__data">
                            <div className="form-controls">
                                <section className="tabs">
                                    <div className="tabs__headers">
                                        <div className="tabs__header active">
                                            English
                            </div>
                                        <div className="tabs__header">
                                            Arabic
                            </div>
                                    </div>
                                    <div className="tabs__bodies">
                                        <div className="tabs__body active">
                                            <div className="form-group">
                                                <label htmlFor="">Name</label>
                                                <input onChange={(event) => this.setState({
                                                    name: event.target.value,

                                                })} className="form-control" type="text" name="" id="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Description</label>
                                                <textarea onChange={(event) => this.setState({
                                                    description: event.target.value
                                                })} className="form-control" name="" id="" cols="30" rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div className="tabs__body ">
                                            <div className="form-group invalid">
                                                <label htmlFor="">Name</label>
                                                <input className="form-control" type="text" name="" id="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Description</label>
                                                <textarea className="form-control" name="" id="" cols="30" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="form-group">
                                    <label htmlFor="">Price</label>
                                    <input onChange={(event) => this.setState({
                                        price: event.target.value
                                    })} className="form-control" type="text" name="" id="" />
                                </div>
                                <div className="add-product__discount">
                                    <div className="form-group">
                                        <label htmlFor="">Satus</label>
                                        <div className="form-group__radios">
                                            <div className="form-group__radio"><input type="radio" name="radioForm" id="" value="onSale" onChange={(event) => this.setState({
                                                saleChoose: event.target.value
                                            })} /><span>On Sale</span></div>
                                            <div className="form-group__radio"><input type="radio" name="radioForm" id="" value="notSale" onChange={(event) => this.setState({
                                                saleChoose: event.target.value,
                                                sale: null
                                            })} /><span>Not On Sale</span></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Discount</label>
                                        {(this.state.saleChoose==="notSale")?<input onChange={(event) => this.setState({
                                            sale: event.target.value,
                                        })} className="form-control" type="text" name="" id="" disabled />:<input onChange={(event) => this.setState({
                                            sale: event.target.value,
                                        })} className="form-control" type="text" name="" id=""/>}
                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Payment Types</label>
                                    <div className="form-group__checkboxs">
                                        <div className="form-group__checkbox"><input type="checkbox" name="Direct Bank Transfare" id="" onChange={(event) => this.checkHandler(event)} /><span>Direct Bank Transfare</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Cheque Payment" id="" onChange={(event) => this.checkHandler(event)} /><span>Cheque Payment</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Paypal" id="" onChange={(event) => this.checkHandler(event)} /><span>Paypal</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Visa" id="" onChange={(event) => this.checkHandler(event)} /><span>Visa</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Mastercard" id="" onChange={(event) => this.checkHandler(event)} /><span>Mastercard</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="On Dilivery" id="" onChange={(event) => this.checkHandler(event)} /><span>On Dilivery</span></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Category</label>
                                    <select className="form-control" name="" id="" onChange={(event) => this.setState({
                                        category: event.target.value
                                    })}>
                                        <option value="Arts & Crafts">Arts & Crafts</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Baby">Baby</option>
                                        <option value="Books">Books</option>
                                        <option value="Eletronics">Eletronics</option>
                                        <option value="Women's Fashion">Women's Fashion</option>
                                        <option value="Men's Fashion">Men's Fashion</option>
                                        <option value="Health & Household">Health & Household</option>
                                        <option value="Home & Kitchen">Home & Kitchen</option>
                                        <option value="Military Accessories">Military Accessories</option>
                                        <option value="Movies & Television">Movies & Television</option>
                                        <option value="Sports & Outdoors">Sports & Outdoors</option>
                                        <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                                        <option value="Toys & Games">Toys & Games</option>
                                    </select>
                                </div>

                                <div className="taged-textbox form-group">
                                    <label className="taged-textbox__lable" htmlFor="">Tags</label>
                                    <div className="taged-textbox__data">
                                        <div className="taged-textbox__tags">
                                            <div className="taged-textbox__tag"><span>tag1</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag2</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag3</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag4</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag5</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag6</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag7</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag8</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag9</span><a href="#" className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                            <div className="taged-textbox__tag"><span>tag10</span><a className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></a></div>
                                        </div>
                                        <div className="taged-textbox__clear">
                                            <a href="#"><i className="fas fa-times"></i></a>
                                        </div>
                                    </div>
                                    <input className="taged-textbox__textbox form-control" type="text" name="" id="" />
                                </div>
                                <div className="add-product__actions">
                                    <button href="#" className="btn btn--gray">Cancel</button>
                                    <button className="btn btn--primary" onClick={(e) => { e.preventDefault(); this.props.onAdd(this.state) }}>Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- footer --> */}
                <div className="footer">
                    {/* <!-- subscription --> */}
                    <div></div>
                    {/* <!-- menu --> */}
                    <div></div>
                    {/* <!-- contact info --> */}
                    <div></div>
                </div>
            </>)
    }
}

const mapStateToProps = state => {
    return {
        product: state.productAdd
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (product) => dispatch({ type: actionTypes.ADD, product: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
import React , {Component} from 'react';
import '../../container/App.scss';
import  personal from '../../img/PersonalImage.png';
import logo from '../../img/logo.png';
import {BrowserRouter ,Route ,Link , Redirect} from 'react-router-dom';
import ListItem from '../ListItem/listItem';
import AddProduct from '../AddProduct/addProduct';


class Navbar  extends Component{

    
    render(){
        return(
            <>
       
            <div class="header">
            {/* <!-- upper header --> */}
            <div class="header__upper">
                {/* <!-- container --> */}
                <div class="container">
                    {/* <!-- contact info --> */}
                    <ul class="list list--hr list--hr-separator">
                        <li class="list__item">
                            <span class="info">
                                {/* <!-- icon --> */}
                                <i class="info__icon far fa-dot-circle"></i>
                                {/* <!-- info --> */}
                                <span class="info__data">1234 Street Name, City Name</span>
                            </span>
                        </li>
                        <li class="list__item">
                            <a href="#" class="info">
                                {/* <!-- icon --> */}
                                <i class="info__icon fab fa-whatsapp"></i>
                                {/* <!-- info --> */}
                                <span class="info__data">123-456-7890</span>
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="info">
                                {/* <!-- icon --> */}
                                <i class="info__icon far fa-envelope"></i>
                                {/* <!-- info --> */}
                                <span class="info__data">mail@domain.com</span>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- side menu --> */}
                    <ul class="list list--hr">
                        <li class="list__item">
                            <a href="#" class="link">
                                {/* <!-- icon --> */}
                                <i class="link__icon fas fa-angle-right"></i>
                                {/* <!-- info --> */}
                                About Us
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="link">
                                {/* <!-- icon --> */}
                                <i class="link__icon fas fa-angle-right"></i>
                                {/* <!-- info --> */}
                                Contact Us
                            </a>
                        </li>
                        {/* <!-- languges --> */}
                        <li class="list__item">
                            {/* <!-- drop down --> */}
                            {/* <!-- to oppen dropdown dropdown--opened --> */}
                            <div class="dropdown ">
                                {/* <!-- header --> */}
                                <div class="dropdown__header">
                                    <a href="#" class="link">
                                        <img class="flag flag-us" src="" alt=""/>
                                        English
                                    </a>
                                    <i class="fas fa-angle-down"></i>
                                </div>
    
                                {/* <!-- items --> */}
                                <div class="dropdown__body">
                                    <ul class="dropdown__items list">
                                        <li class="dropdown__item list__item">
                                            <a href="#" class="link">
                                                <img class="flag flag-us" src="" alt=""/>
                                                English
                                            </a>
                                        </li>
                                        <li class="dropdown__item list__item">
                                            <a href="#" class="link">
                                                <img class="flag flag-es" src="" alt=""/>
                                                Español
                                            </a>
                                        </li>
                                        <li class="dropdown__item list__item">
                                            <a href="#" class="link">
                                                <img class="flag flag-fr" src="" alt=""/>
                                                Française
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- middle header --> */}
            <div class="header__middle container">
                {/* <!-- logo --> */}
                <a href="#" class="header__logo-box">
                    <img class="header__logo" src={logo} alt=""/>
                </a>
                {/* <!-- user options --> */}
                <div class="header__user-options">
                    {/* <!-- login control --> */}
                    <div class="dropdown">
                        <div class="dropdown__header">
                            <div class="image image--small image--circle" style={{backgroundImage:`url(${personal})`}}>
                            </div>
                        </div>
                        <div class="dropdown__body">
    
                        </div>
                    </div>
                    {/* <!-- shopping card dropdown --> */}
                    {/* <!-- dropdown--opened to open --> */}
                    <div class="dropdown dropdown--left  ">
                        {/* <!-- header --> */}
                        <div class="dropdown__header">
                            <div class="image image--small">
                                <div class="notification notification--danger">
                                    1
                                </div>
                            </div>
                        </div>
                        {/* <!-- body --> */}
                        <div class="dropdown__body">
                            {/* <!-- items --> */}
                            <ul class="dropdown__items list list--vr-separator">
                                <li class="dropdown__item list__item">
                                    {/* <!-- item small 2 --> */}
                                    <div class="item-small-1">
                                        {/* <!-- item data --> */}
                                        <div class="item-small-1__data">
                                            {/* <!-- title --> */}
                                            <a href="" class="item-small-1__title">Camera X1000</a>
                                            {/* <!-- price --> */}
                                            <span class="item-small-1__description">
                                                1 X $890
                                            </span>
                                        </div>
                                        {/* <!-- item image --> */}
                                        <div class="item-small-1__image-box">
                                            <a href="#" class="item-small-1__image image" >
                                            </a>
                                            <a href="#" class="item-small-1__action">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown__item list__item">
                                    <div class="item-small-1">
                                        {/* <!-- item data --> */}
                                        <div class="item-small-1__data">
                                            {/* <!-- title --> */}
                                            <a href="" class="item-small-1__title">Camera X2000</a>
                                            {/* <!-- price --> */}
                                            <span class="item-small-1__description">
                                                2 X $990
                                            </span>
                                        </div>
                                        {/* <!-- item image --> */}
                                        <div class="item-small-1__image-box">
                                            <a href="#" class="item-small-1__image image" >
                                            </a>
                                            <a href="" class="item-small-1__action">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- totals --> */}
                            <div class="separator"></div>
                            <div class="block">
                                <span class="lable">Total:</span>
                                <span class="lable">$2870</span>
                            </div>
                            {/* <!-- actions --> */}
                            <div class="block list list--hr">
                                <a class="list-item btn btn--gray" href="">View Cart</a>
                                <a class="list-item btn btn--primary" href="">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- lower header --> */}
            <div class="header__lower container">
                {/* <!-- navigation --> */}
    
    
                <nav class="nav">
                
     <ul class="nav__items list list--hr">
                        {/* <!-- items --> */}
                        <li class="nav__item">
                            <Link class="nav__link" to="/home">Home</Link>
                        </li>
                        <li class="nav__item dropdown ">
                            {/* <!-- title --> */}
                            <a class="nav__link dropdown__header" href="#">
                                Products
                            </a>
                            {/* <!-- items --> */}
                            <div class="dropdown__body">
                                <ul class=" list">
                                    <li class="list__item">
                                        <Link class="nav__inner-link" to="/listItem">Product Listing</Link>
                                    </li>
                                    <li class="list__item">
                                        <Link class="nav__inner-link" to="/addProduct">Add Product</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">Contact Us</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">About Us</a>
                        </li>
                    </ul>
    
                   
                </nav>
                </div>
        </div>
        
    </>
            
        );
    }
}

export default Navbar;
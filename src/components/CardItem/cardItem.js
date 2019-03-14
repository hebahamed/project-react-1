import React ,{Component} from 'react';
import {BrowserRouter ,Route ,Link , Redirect} from 'react-router-dom';


class CardItem extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
             <div class="item-medium-1">
            {(this.props.sale===null)?null:<div class="item-medium-1__alert">{this.props.sale}%</div>}
                    <div class="item-medium-1__image image" style={{backgroundImage:`url(${this.props.image})`}}>
                        <a href="#" class="item-medium-1__action">Add to Cart</a>
                    </div>
                    <Link  to={`/detailProduct/${this.props.id}`}>
                        <h4>{this.props.name}</h4>
                        <div class="flex-row">
                            <div>
                                {/* <del>${this.props.price}</del> */}
                                {(this.props.sale===null)?<span>${this.props.price}</span>:<del>${this.props.price}</del>}
                                {(this.props.sale===null)?<span class="lable"></span>:<span class="lable">${this.props.priceAfterSale}</span>}
                            </div>
                        </div>
                    </Link>
                    <div class="crud-actions">
                    <Link  to={`/detailProduct/${this.props.id}`}><i class="far fa-eye"></i></Link>
                        <a href="#"><i class="fas fa-edit"></i></a>
                        <a href="#" onClick={this.props.deleted}><i class="fas fa-trash-alt"></i></a>
                    </div>
                </div>

            </>
        )
    }
}

export default CardItem;
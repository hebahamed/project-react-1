import * as actionTypes from '../actions/actions';
import imgProduct1 from '../../img/camera1.jpg';
import imgProduct2 from '../../img/bag.jpg';
import imgProduct3 from '../../img/bag1.jpg';

const intialState = {
    product: {},
    productAdd: {},
    products: [
        {
            id: 1,
            name: "camera 1",
            image: imgProduct1,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 2,
            name: "camera 2",
            image: imgProduct2,
            sale: null,
            price: 250,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 3,
            name: "camera 3",
            image: imgProduct3,
            sale: 40,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 4,
            name: "camera 4",
            image: imgProduct2,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 5,
            name: "camera 5",
            image: imgProduct3,
            sale: null,
            price: 250,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 6,
            name: "camera 6",
            image: imgProduct1,
            sale: 30,
            price: 750,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 7,
            name: "camera 7",
            image: imgProduct1,
            sale: null,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 8,
            name: "camera 8",
            image: imgProduct2,
            sale: 70,
            price: 1000,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 9,
            name: "camera 9",
            image: imgProduct3,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 10,
            name: "camera 1 ver2",
            image: imgProduct1,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 11,
            name: "camera 2 ver2",
            image: imgProduct2,
            sale: null,
            price: 250,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 12,
            name: "camera 3 ver2",
            image: imgProduct3,
            sale: 40,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 13,
            name: "camera 4 ver2",
            image: imgProduct2,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 14,
            name: "camera 5 ver2",
            image: imgProduct3,
            sale: null,
            price: 250,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        }, {
            id: 15,
            name: "camera 6 ver2",
            image: imgProduct1,
            sale: 30,
            price: 750,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 16,
            name: "camera 7 ver2",
            image: imgProduct1,
            sale: null,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 17,
            name: "camera 8 ver2",
            image: imgProduct2,
            sale: 70,
            price: 1000,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
        {
            id: 18,
            name: "camera 9 ver2",
            image: imgProduct3,
            sale: 50,
            price: 300,
            get priceAfterSale() { return this.price - (this.price / 100) * this.sale },
            description: ""
        },
    ],
    currentPage:1,
    productsPerPage :9,

}

const Reducer = (state = intialState, action) => {

    switch (action.type) {

        case 'SHOW':
            console.log(action.id);
            let productArr = [...state.products];
            let indexDetails = productArr.findIndex(pro => pro.id.toString() === action.id.toString());
            let productCopy = productArr[indexDetails];
            console.log(productCopy);
            return {
                ...state,
                product: productCopy
            }


        case 'DELETE':
            let productArray = [...state.products];
            let indexDeleted = action.id;
            productArray.splice(indexDeleted, 1);
            return {
                ...state,
                products: productArray,
            }
        case 'ADD':
            console.log(action.product);
            let productAdded = { ...state.productAdd }
            let productsAdd = [...state.products];
            productAdded = action.product;
            if (action.product.sale === null) {
                productAdded.priceAfterSale = null
            } else {
                productAdded.priceAfterSale = (action.product.price) - (action.product.price / 100) * action.product.sale;
            }
            productAdded.id = state.products.length + 1
            productsAdd.push(productAdded)
            return {
                ...state,
                products: productsAdd,
                productAdd: productAdded
            }
            case'CHANGE':
            return{
                ...state,
                currentPage:action.currentPage
            }
            case 'INCREASE':
            let currentPageCopyI = state.currentPage + 1;
            if(currentPageCopyI>state.products.length/state.productsPerPage){
                currentPageCopyI =state.products.length/state.productsPerPage;
            }
            return{
                ...state,
                currentPage:currentPageCopyI
            }
            case 'DECREASE':
            let currentPageCopyD = state.currentPage - 1;
            if(currentPageCopyD<state.currentPage)
            {
                currentPageCopyD = 1
            }
            return{
                ...state,
                currentPage:currentPageCopyD
            }
        default:
            return {
                ...state
            }
    }
}
export default Reducer;
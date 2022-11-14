import * as actionTypes from "./Shopping-Types";

const INITIAL_STATE = {
    products : [
        {
            id: 1, 
            name: "Khóa học java cơ bản",
            description: "Khóa học java cơ bản dành cho người mới bắt đầu",
            price: 15.0 ,
            image: "https://hocspringmvc.net/wp-content/uploads/2021/03/lap-trinh-java-for-beginner.jpg"
        },
        {
            id: 2, 
            name: "Khóa học C# cơ bản",
            description: "Khóa học C# cơ bản dành cho người mới bắt đầu",
            price: 20.0 ,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wwxtYsu48YesfZCUnQXMgV37VR8R-2rxmQ&usqp=CAU"
        },
        {
            id: 3, 
            name: "Khóa học Python cơ bản",
            description: "Khóa học Python cơ bản dành cho người mới bắt đầu",
            price: 25.0 ,
            image: "https://cdn.thenewstack.io/media/2021/11/ab06a958-pythonlogo.png"
        },
    ],
    cart: [],
    
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // find
            const item = state.products.find(
            (product) => product.id === action.payload.id
            );
            // Check tồn tại
            const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
            );
            //console.log(item);
            return {
            ...state,
            cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
                : [...state.cart, { ...item, qty: 1 }],
            };
        
        case actionTypes.REMOVE_FROM_CART:
            return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            };

        case actionTypes.ADJUST_ITEM_QTY:
            return {
            ...state,
            cart: state.cart.map((item) =>
                item.id === action.payload.id
                ? { ...item, qty: +action.payload.qty }
                : item
            ),
            };

        default:
            return state;
    }
}


export default shopReducer;
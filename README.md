# Redux Toolkit Setup and Flow

## Installation:

i. `npm install @reduxjs/toolkit`  
ii. `npm install react-redux`  

## Setup Steps:

iii. Setup the store in `App.js`  
iv. Make a file `store.js`, which contains reducer function and iske andar slice name hota h.  
v. Create a slice file  

Slice is used to manage state.  
- `name`: slice ka naam  
- `initialState`: initial ka data  
- `reducers`: wo functions jo state update karte hain  

---

## Reducer :-
Reducer is used to update the store.

Reducer have 2 argument-  
a. `state` -> wo data jo store me save rahta h  
b. `action` -> kya karna hai (`action.type` + `action.payload`)  

➡️ Action have 
i.  `type` -> kis type ka kaam karna hai (jaise "removeFromCart" ya "addToCart")
ii. `payload` -> data like product details
example-> action yesa dikhta h
{
  type: "addToCart",
  payload: { id: 1, title: "Shoes" }
}


**Note:-**  
a. Har slice ka apna apna state hota h.  
b. Action ek event hai (jaise `onClick`), jo reducer ko trigger karta hai.

---

## Dispatch ->
- Jab user koi action kare (like button click), toh dispatch ke through action ko reducer tak bhejte h.

- onClick={()=>dispatch(addTocart(data))} 
  dispatch me 2 chij jata h type and payload.
  type-addTocart and payload - data .

---

## How redux store looks like
{
  cart: {
    items: []
  }
}



## Selector ->
Selectors Redux store se state ko retrieve karne ke liye use hote hain.
   
=> const cartData=useSelector((state)=>state.cart.items);
=> state.cart.items -> state means store me jao waha cart name ka slice hoga usme items name ka array hoga

---

## Flow of Redux ->

`user click on button` -> `action dispatch hoga(with type and payload)` -> `slice ke andar jata h` -> `reducers iss action and payload ko update karta h` -> `action jo hai wo state ko modify karta h` -> `redux store me state update hoga` -> `store se updated state ko fetch karenge(using useselector)`


# REDUX VS CONTEXT API
->Ideally their is no comparision between redux and context api.
->Both used to prevent prop drilling.


# Context api
It is only a dependency injection mechanism h.
Data or any dependency directly ek component se dusre component me send kar deta h .

->Easy to learn and setup.


# REDUX
It is a state management library.

Redux also provide MIDDLEWARE. like  data fetch karke koi state update karna h,iss asynchronous call ko manage karne ke liye middleware use krte h like THUNK and SAGA , RTK query(used for caching and prevent duplication)

->REDUX also have loggers jo state ko track karne me help karta h.Haar action and haar update pe state ko track kar sakte h.

# For API calling in redux Toolkit we use
- RTK query
- THUNK
- SAGA
->Difficult to learn and setup.



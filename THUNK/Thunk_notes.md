
- Thunk ek middleware hai jo aapko async task krne ke liye use karte h.

- Redux by default synchronous kaam kar sakta hai.
- Thunk ka kaam hai Redux me async (asynchronous) kaam ko handle karna, jaise API call .

- Thunk tmhe centralized jagah provide karta h jaha tum data store karke koi bhi component me send kar sakte ho ,asynchrously.

- context api me tmhe async await ka code manually likhna padta h.

# Basic Concept:
- Redux ek state management library hai jo by default synchronous hota hai. Lekin real-world apps me hume asynchronous tasks (jaise API calls, database operations) bhi karne padte hain.
- Yahin pe Redux Thunk ka role aata hai.

# Kya Hai Redux Thunk?
- Thunk ek middleware hai jo Redux store ko asynchronous kaam (jaise async/await wale API calls) handle karne ki power deta hai.
- Redux Toolkit ke saath Redux Thunk by default preconfigured hota hai, tumhe manually kuch add nahi karna padta.

# Redux Toolkit Thunk ka Use Kyu Karte Hai?
- Asynchronous logic handle karne ke liye (like fetch, axios se API call).
- Loading / Error state ko manage karne ke liye Redux ke andar hi.
- Centralized control milta hai async data flow ka.
- Clean & scalable code structure ready hota hai production ke liye.
- Alag-alag component me baar-baar logic likhne ki zarurat nahi padti.

Note: thunk me api call ke liye manually try and catch nhi likhna padta. sab kuch thunk manage ka leta h.

# Redux Toolkit Thunk vs Context API

| Feature                  | Redux Toolkit Thunk                           | Context API with Async                                  |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------- |
| Built-in Async Handling  | ✅ createAsyncThunk ke through                 | ❌ Manually `useEffect` + `async/await` likhna padta hai |
| Centralized Store        | ✅ Haan                                        | ⚠️ Nahi (Har jagah se data flow karna padta hai)        |
| Scalability              | ✅ Large projects ke liye best                 | ❌ Small projects me thik                                |
| Code Cleanliness         | ✅ Slice pattern + separation of concerns      | ⚠️ Mix ho jaata hai logic aur UI                        |
| Error/Loading Management | ✅ Built-in pattern with `pending`, `rejected` | ❌ Manually likhna padta hai                             |

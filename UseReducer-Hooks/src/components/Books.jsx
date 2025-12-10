import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Books = () => {

    const books = [
        {
            id: uuidv4(),
            name: 'Legecy of blood',
        },
        {
            id: uuidv4(),
            name: 'Fire and Wind',
        },
        {
            id: uuidv4(),
            name: 'Ikigay',
        },
    ];


    const reducer = (state,action) => {
        console.log(state);
        console.log(action);

        if(action.type == "GET"){
            return {
                ...state,
                bookname:action.payload
            }
        }

        if(action.type == "ADD"){

            let bookCollection = [...state.books,{
                id: uuidv4(),
                name: action.payload,
            }]

            return {
                ...state,
                books:bookCollection,
            }
        }

        if(action.type == "CLEAR"){
            return {
                ...state,
                bookname:null,
            }
        }
    }


    const [state,dispatch] = useReducer(reducer,{
        bookname : null,
        books : books,
    });

    console.log(state);
    // console.log(dispatch);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        dispatch({
            type : "ADD",
            payload : state.bookname,
        });

        dispatch({type:"CLEAR",payload:null});
    }



  return (
    <>
        {state.books.map((book)=>{
            return <p key={book.id}>{book.name}</p>
        })}

        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Book Name : </label>
                    <input type="text" name='name' onChange={(e)=>dispatch({type:"GET",payload:e.target.value})}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>

    </>
  )
}

export default Books
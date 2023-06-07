import {useState} from 'react'

 export const Todo = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<string[]>([])
    const handleClick = () => {
        setTodos([...todos, todo])

    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     setTodo(e.target.value)

    }

    //interface for raw data
    interface RawDataProps {
        name:string,
        len:number

    }

    const RawData:RawDataProps[] = [
        {
            name:'test1',
            len:2

        },
        {
            name:'test1',
            len:2

        },
        {
            name:'test1',
            len:2

        },



    ]
    return(
       
        <div>
            <h1>Todos</h1>
           {todos.map(data => <li>{data}</li>)}
            <input type = "text" value = {todo} onChange = { e =>handleChange(e)}/>

            <button onClick = {handleClick}>Add</button>
        </div>


    )
}
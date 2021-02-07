// // import logo from './logo.svg';
// import './App.css';

// import TodoItem from "./TodoItem"
// import todosData from "./todosData"
// import React from 'react';

// class App extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             todoItems: todosData.map(item => <TodoItem key= {item.id} item={item} />)
//         }
//     }

  
//     render(){
//         return (
//             <div className="todo-list">

//                 {this.state.todoItems}

//             </div>
//         )
//     }
  
// }

// export default App;

// import logo from './logo.svg';
import './App.css';

import TodoItem from "./TodoItem"
import todosData from "./todosData"
import React from 'react';

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }

  
    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        return (
            <div className="todo-list">

                {todoItems}

            </div>
        )
    }
  
}

export default App;

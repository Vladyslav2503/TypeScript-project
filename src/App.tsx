import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Link style={{textDecoration: 'none', border: '1px solid teal', padding: '5px'}} to={'/users'} >Користувачі</Link>
        <Link style={{textDecoration: 'none', border: '1px solid teal', padding: '5px'}} to={'/todos'} >Список справ</Link>
        <Routes>
            <Route path='/users' element={<UsersPage/>} />
            <Route path='/todos' element={<TodosPage/>} />
            <Route path='/users/:id' element={<UserItemPage/>} />
            <Route path='/todo/:id' element={<TodoItemPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

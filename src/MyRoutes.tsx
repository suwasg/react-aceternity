import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { TypewriterEffect } from './components/TypewriterEffect'
import { Signup } from './components/Signup'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<TypewriterEffect/>}/>
              <Route path='/signup' element={<Signup/>}/>
            </Route>
        </Routes>


    </Router>
  )
}

export default MyRoutes
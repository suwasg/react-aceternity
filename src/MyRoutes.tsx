import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Signup } from './components/Signup'
import HomePage from './pages/HomePage'
import { TabsDemo } from './components/TabComp'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/signup' element={<Signup/>}/>

            </Route>

    <Route path='/tabs' element={<TabsDemo/>}/>
        </Routes>


    </Router>
  )
}

export default MyRoutes
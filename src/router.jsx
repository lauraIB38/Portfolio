import {
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function Router() {
  return (
    <Routes>
    
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="about">
        <Route index element={<About />} />
      </Route>
      <Route path="projects">
        <Route index element={<Projects />} />
      </Route>
      <Route path="contact">
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default Router;

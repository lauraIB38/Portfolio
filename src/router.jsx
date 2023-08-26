import {
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home'

function Router() {
  return (
    <Routes>
      <Route path="home">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router;

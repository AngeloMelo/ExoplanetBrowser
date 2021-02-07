import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

import AboutPage from './components/aboutpage'
import PlanetsPage from './components/planetspage'
import Navbar from './components/navbar'

function App() {

  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <PlanetsPage />
          </Route>
        </Switch>
      </div>  
    </Router>
  )
}

export default App
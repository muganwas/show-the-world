import React from 'react'
import './App.css'
import { Header } from './components'
import { Home } from './pages'
import { MyContext, MyProvider } from './context'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

const HeaderComponent = (props) => <MyContext.Consumer>{context => <Header {...props} {...context} />}</MyContext.Consumer>

const AppComponent = () => (
  <div id='app-container' className="w-full h-full flex-col bg-no-repeat bg-center bg-cover" data-testid='app-container'>
    <HeaderComponent />
    <div className='flex h-full flex-1'>
      <Router basename='/'>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  </div>
)

const App = (props) => (<MyProvider>
  <AppComponent {...props} />
</MyProvider>);

export default App

import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.scss"
import AboutUs from "./components/AboutUs/AboutUs"
import Events from "./components/Events/Events"
import Homepage from "./components/Homepage/Homepage"
import Timeline from "./components/Timeline/Timeline"
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/timeline" exact component={Timeline} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/events/:id" component={Events} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

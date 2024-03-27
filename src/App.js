
import './App.css'; //main frame heart of the project 
//importing necessary components and function from the react-router-dom library for routing
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";

// import Main from './Components./Home./Main'
import Main from "./Components/Home/Main"
import PropertyList from './Components/Home/PropertyList';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
function App() {
  // manages the routing configuration for the application
  const router = createBrowserRouter(
    //create route from the elements passed to it
    createRoutesFromElements(
      //define a Route component that matches all paths"/" and render the main component
      //exact propertirs ensure that the route matches exactly what u gave in path

      <Route path="/" element={<Main />} id="main" exact>
        <Route id="home" index element={<PropertyList />} exact />
        <Route
          element={<PropertyDetails />}
          id="PropertyDetails"
          path="propertylist/:id"
          exact
        />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* This ensures that the routing functionality is available throuout the application
      <RouterProvider router={router}/> */}
   <RouterProvider router={router}/> 
    </div>
  );
}

export default App;

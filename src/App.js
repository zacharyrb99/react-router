import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import DogList from './Dogs/DogList';
import DogDetails from './Dogs/DogDetails';
import ColorList from './Colors/ColorList';
import ColorForm from './Colors/ColorForm';
import Color from './Colors/Color';
import { useEffect, useState } from 'react';

function App() {
  const INITIAL_COLORS = JSON.parse(localStorage.getItem("colors")) || {
    red: 'FF0000'
  };

  const [colors, setColors] = useState(INITIAL_COLORS);

  const addColor = (newColor) => {
    setColors(colors => ({...colors, ...newColor}));
  }

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors))
  }, [colors])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/dogs'>
            <DogList />
          </Route>

          <Route exact path='/dogs/:name'>
            <DogDetails />
          </Route>

          <Route exact path='/colors'>
            <ColorList colors={colors} />
          </Route>

          <Route exact path='/colors/new'>
            <ColorForm addColor={addColor} />
          </Route>

          <Route exact path='/colors/:color'>
            <Color colors={colors}/>
          </Route>

          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

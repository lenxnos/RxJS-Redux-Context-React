import './App.css'
import { Provider } from 'react-redux';
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Home from './pages/Home'
import store from './redux/store';
import ComponentRedux2 from './pages/Home/components/ComponentRedux2';
import ComponentRedux1 from './components/Redux/ComponentRedux1';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h2>RxJX</h2>
        <Component1 />
        <Component2 />
        <h2>Context</h2>
        <Home />
        <h2>Redux</h2>
        <ComponentRedux1 />
      </Provider>
    </div>
  )
}

export default App

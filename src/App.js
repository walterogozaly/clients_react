import './App.css';
import { Provider } from 'react-redux';
import Clients from './components/Clients';
import Clientform from './components/Clientform';

import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Clientform />
        <hr />
        <Clients />
      </div>
    </Provider>
  );
}

export default App;

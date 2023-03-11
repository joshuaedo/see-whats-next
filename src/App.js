import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { Route, Routes } from 'react-router-dom';

function App() {
  const user = {
    name: 'Joshua',
    email: 'joshua.edo01@gmail.com',
  };
  return (
    <div className='app'>
      <Routes>
        {user ? (
          <>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </>
        ) : (
          <Route path='/' element={<LoginScreen />} />
        )}
      </Routes>
    </div>
  );
}

export default App;

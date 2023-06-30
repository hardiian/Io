
import './component/style/App.css';

import NavigationBar from './component/navigationbar/NavigationBar';
import SideBar from './component/navigationbar/SideBar';
import SignIn from './component/page/authentication/SignIn';
import Home from './component/page/home/Home';
import Profile from './component/page/profile/Profile';

import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
        </header>
        <NavigationBar />
        <SideBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={ <Profile/>} />
        </Routes>
        </div>
      </>
  );
}

export default App;

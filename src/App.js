import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="font-inter min-h-screen bg-gray-200">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;

import './App.css';
import Users from './pages/Users';
function App() {  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        User Dashboard
      </h1>
      <div className='mt-8 w-full md:max-w-[800PX] mx-auto text-center'>
        <Users />
      </div>      
    </div>
  );
}

export default App;

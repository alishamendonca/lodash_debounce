
import './App.css';
//import WithoutCallback from './WithoutCallback';
import WithCallback from './WithCallback';
//import Search from './Search';

function App() {
 
  const propValue = "Hello, prop value!";
  return (
    <>
      <WithCallback propValue={propValue} />
      {/* <WithoutCallback /> */}
      {/* <Search /> */}
    </>
  )
}

export default App

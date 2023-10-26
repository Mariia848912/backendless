import { Route, Routes } from 'react-router-dom';
import { getTabs } from "../fakeApi";

function App() {
  const tabs = getTabs();
  console.log(tabs);
  return (
    <>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  )
}

export default App;

import './App.css';
import React from 'react'
// import { Button } from 'react-bootstrap';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Dashboard } from './page/dashboard/dashboard.page';
function App() {
  return (
    <div className="App">
       {/* <Entry />  */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>


    </div>
  );
}

export default App;

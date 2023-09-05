import './App.css';
import React from 'react'
// import { Button } from 'react-bootstrap';
import { DefaultLayout } from './Layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
function App() {
  return (
    <div className="App">
       {/* <Entry />  */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        <AddTicket/>
      </DefaultLayout>


    </div>
  );
}

export default App;

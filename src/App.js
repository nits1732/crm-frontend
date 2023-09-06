import './App.css';
import React from 'react'
// import { Button } from 'react-bootstrap';
import { DefaultLayout } from './Layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/dashboard.page';
// import { AddTicket } from './page/new-ticket/AddTicket.page';
// import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/ticket.page';
function App() {
  return (
    <div className="App">
       {/* <Entry />  */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        {/* <TicketLists/> */}
        <Ticket/>
      </DefaultLayout>


    </div>
  );
}

export default App;

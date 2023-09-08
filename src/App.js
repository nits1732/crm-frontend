import './App.css';
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { Dashboard } from './page/dashboard/dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/ticket.page';
import { Entry } from './page/entry/Entry.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/"><Entry/></Route> 
        
          <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
          <PrivateRoute path="/add-ticket"><AddTicket/></PrivateRoute>
          <PrivateRoute path="/tickets"><TicketLists/></PrivateRoute>
          <PrivateRoute path="/ticket/:tid"><Ticket/></PrivateRoute>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

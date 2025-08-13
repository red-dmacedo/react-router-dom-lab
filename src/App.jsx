import './App.css';
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import { Mailbox } from '../public/scripts/classes';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const boxData = [
  new Mailbox(0, 'Small', 'user1',),
  new Mailbox(1, 'Medium', 'user2',),
  new Mailbox(2, 'Large', 'user3',),
  new Mailbox(3, 'Small', 'user4',),
  new Mailbox(4, 'Medium', 'user5',),
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(boxData);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <h1>Mailbox Lab</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>}></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}></Route>
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        ></Route>
        <Route path="*" element={<h2>No Content Here</h2>}></Route>
      </Routes>
    </>
  );
};

export default App;

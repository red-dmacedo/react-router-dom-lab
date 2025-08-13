import './App.css';
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import { Mailbox } from '../public/scripts/classes';

const boxData = [
  new Mailbox(0, 'user1', 'Small'),
  new Mailbox(2, 'user2', 'Medium'),
  new Mailbox(3, 'user3', 'Large'),
  new Mailbox(4, 'user4', 'Small'),
  new Mailbox(5, 'user5', 'Medium'),
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(boxData);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <h1>Mailbox Lab</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>}></Route>
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

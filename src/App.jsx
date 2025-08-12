import useState from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";

const App = () => {
  const [mailboxes, setMailboxes] = useState({});
  const [newMailbox, setNewMailbox] = useState({});

  const setNewMailboxProps = (props) => {};

  const addMailbox = (props) => {
    setNewMailbox({
      _id: mailboxes.length + 1,
      boxSize: props.boxSize,
      boxOwner: props.boxOwner,
    });
  };

  return (
    <>
      {/* <h1>Hello world!</h1> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>}></Route>
        <Route path="*" element={<h2>No Content Here</h2>}></Route>
      </Routes>
    </>
  );
};

export default App;

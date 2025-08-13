import { Mailbox } from "../../../public/scripts/classes";
import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = new Mailbox;

const MailboxForm = (props) => {
  const { addMailbox } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const evtHandleSubmit = (evt) => {
    evt.preventDefault();
    addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const evtHandleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={evtHandleSubmit}>
        {/* <div className="input-line"> */}
          <label htmlFor="boxOwner">Enter a Boxholder:</label>
          <input
            type="text"
            id="boxOwner"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={evtHandleChange}
          />
        {/* </div> */}
        {/* <div> */}
          <label htmlFor="boxSize">Select a Box Size:</label>
          <select name="boxSize" id="boxSize" onChange={evtHandleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        {/* </div> */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;

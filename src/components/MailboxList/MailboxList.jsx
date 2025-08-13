import './MailboxList.sass';
import { Link } from 'react-router';

const MailboxList = (props) => {
  const { mailboxes } = props;
  return (
    <>
    <h2>Mailboxes</h2>
    <ul className='center list'>
      {mailboxes.map((box) => (
        <li key={box._id} className='mail-card'>
          <Link to={`/mailboxes/${box._id}`} className='color-red'>Mailbox {box._id}</Link>
        </li>
      ))}
    </ul>
    </>
  );
};

export default MailboxList;
import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const box = mailboxes.find(box => box._id === Number(mailboxId));
  if(!box) return (<h2>Mailbox Not Found!</h2>);
  return (
    <>
      <h2>Mailbox {box._id}</h2>
      <p>Boxholder: {box.boxOwner}</p>
      <p>Box Size: {box.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
const { Link } = ReactRouterDOM

import { MailPreview } from './MailPreview.jsx'

export function MailList({ emails, onRemoveMail, onChangeEmail, showTrashButton }) {
  if (!emails || emails.length === 0) return <div>No emails available</div>

  const handleRemoveMail = (emailId) => {
    onRemoveMail(emailId);
  };

  return (
    // <section className='emails-lst-container'>
    <section >
      {emails.map(email => (
        <div key={email.id} className='email-card'>
          <MailPreview email={email} onChangeEmail={onChangeEmail} showRemoveButton={showTrashButton} />
          <div className="email-actions">
          <button className='material-icons' onClick={() => handleRemoveMail(email.id)}>trash</button>
          {/* <button><Link to={`/mail/${email.id}`}>Details</Link></button>
          <button><Link to={`/mail/edit/${email.id}`}>Edit</Link></button> */}
          </div>
        </div>
      ))}
    </section>
  );
}

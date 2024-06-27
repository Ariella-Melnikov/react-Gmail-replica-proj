const { Link } = ReactRouterDOM

import { MailPreview } from './MailPreview.jsx'

export function MailList({ emails, onRemoveMail, onChangeEmail }) {
  if (!emails || emails.length === 0) return <div>No emails available</div>
  return (
    // <section className='emails-lst-container'>
    <section >
      {emails.map(email => (
        <div key={email.id} className='email-card'>
          <MailPreview email={email} onChangeEmail={onChangeEmail} />
          {/* <div className="email-actions">
          <button onClick={() => onRemoveMail(email.id)}>Remove</button>
          <button><Link to={`/mail/${email.id}`}>Details</Link></button>
          <button><Link to={`/mail/edit/${email.id}`}>Edit</Link></button>
          </div> */}
        </div>
      ))}
    </section>
  );
}

const { Link } = ReactRouterDOM

import { MailPreview } from './MailPreview.jsx'

export function MailList({ emails, onChangeEmail, showTrashButton }) {
  if (!emails || emails.length === 0) return <div>No emails available</div>



  return (
    // <section className='emails-lst-container'>
    <section >
      {emails.map(email => (
        <div key={email.id} >
          <MailPreview email={email} onChangeEmail={onChangeEmail}  showRemoveButton={showTrashButton} />
          
          {/* <button><Link to={`/mail/${email.id}`}>Details</Link></button>
          <button><Link to={`/mail/edit/${email.id}`}>Edit</Link></button> */}

        </div>
      ))}
    </section>
  );
}

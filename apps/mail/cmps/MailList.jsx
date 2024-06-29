const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from './MailPreview.jsx'
import { MailFilter } from './MailFilter.jsx'

export function MailList({ emails, onChangeEmail, showTrashButton, filterBy, onChangeFilter }) {
  
  return (
    // <section className='emails-lst-container'>
    <div>
      <MailFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
      <div>
        {!emails || emails.length === 0 ? (
          <div>No emails available</div>
        ) : (
          <section>
            {emails.map((email) => (
              // <Link key={email.id} to={`/mail/${email.id}`}>
              <div key={email.id}>
                <MailPreview email={email} onChangeEmail={onChangeEmail} showRemoveButton={showTrashButton} />

                {/* <button><Link to={`/mail/${email.id}`}>Details</Link></button>
          <button><Link to={`/mail/edit/${email.id}`}>Edit</Link></button> */}

                {/* </Link> */}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

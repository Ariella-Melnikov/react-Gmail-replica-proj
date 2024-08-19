const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from './MailPreview.jsx'
import { MailFilter } from './MailFilter.jsx'

export function MailList({ emails, onChangeEmail, showTrashButton, filterBy, onChangeFilter }) {
  
  return (
    <div>
      <MailFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
      <div>
        {!emails || emails.length === 0 ? (
          <div>No emails available</div>
        ) : (
          <section>
            {emails.map((email) => (
              <div key={email.id}>
                <MailPreview email={email} onChangeEmail={onChangeEmail} showRemoveButton={showTrashButton} />
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

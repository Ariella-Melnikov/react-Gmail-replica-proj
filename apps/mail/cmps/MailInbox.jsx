import { MailList } from './MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
const { useState, useEffect } = React

export function MailInbox({emails, onChangeEmail, onChangeEmails }) {

  useEffect(() => {
    // loadEmails()
  }, [])

  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} />
    </div>
  )
}

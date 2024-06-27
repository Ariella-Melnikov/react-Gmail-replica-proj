import { MailList } from './MailList.jsx'

const { useState, useEffect } = React

export function MailSent({emails, onChangeEmail}) {

  emails = emails.filter(e => e.from === 'user@appsus.com')


  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} />
    </div>
  )
}

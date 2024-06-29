import { MailList } from './MailList.jsx'

const { useState, useEffect } = React

export function MailSent({emails, onChangeEmail, filterBy, onChangeFilter }) {

  emails = emails.filter(e => e.from === 'user@appsus.com' && !e.isRemoved && !e.isDraft)


  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} filterBy={filterBy} onChangeFilter={onChangeFilter} />
    </div>
  )
}

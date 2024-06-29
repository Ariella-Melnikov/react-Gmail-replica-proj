import { MailList } from './MailList.jsx'
const { useState, useEffect } = React

export function MailInbox({emails, onChangeEmail, filterBy, onChangeFilter  }) {

  emails = emails.filter(e => e.to === 'user@appsus.com' && !e.isRemoved)
  
  useEffect(() => {
    console.log('MailListemails ', emails)
  }, [emails])
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail}  filterBy={filterBy} onChangeFilter={onChangeFilter}/>
    </div>
  )
}

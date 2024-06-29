import { MailList } from './MailList.jsx'

export function TrashMail({ emails, onChangeEmail, filterBy, onChangeFilter  }) {
  emails = emails.filter(e => e.isRemoved)
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} showRemoveButton={true}   filterBy={filterBy} onChangeFilter={onChangeFilter}/>
    </div>
  )
}
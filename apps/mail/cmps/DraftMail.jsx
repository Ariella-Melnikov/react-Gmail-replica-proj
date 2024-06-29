import { MailList } from './MailList.jsx'

export function DraftMail({ emails, onChangeEmail, filterBy, onChangeFilter  }) {
  emails = emails.filter(e => e.isDraft)
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} filterBy={filterBy} onChangeFilter={onChangeFilter}/>
    </div>
  )
}
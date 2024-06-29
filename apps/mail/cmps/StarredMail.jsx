import { MailList } from './MailList.jsx'

export function StarredMail({ emails, onChangeEmail,  filterBy, onChangeFilter  }) {
  emails = emails.filter(e => e.isStarred)
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail}  filterBy={filterBy} onChangeFilter={onChangeFilter} />
    </div>
  )
}

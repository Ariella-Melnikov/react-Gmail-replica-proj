import { MailList } from './MailList.jsx'

export function StarredMail({ emails, onChangeEmail }) {
  emails = emails.filter(e => e.isStarred)
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail}  />
    </div>
  )
}

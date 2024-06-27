import { MailList } from './MailList.jsx'

export function StarredMail({ emails, onToggleStar }) {
  emails = emails.filter(e => e.isStarred)
  return (
    <div>
      <MailList emails={emails} onToggleStar={onToggleStar} />
    </div>
  )
}

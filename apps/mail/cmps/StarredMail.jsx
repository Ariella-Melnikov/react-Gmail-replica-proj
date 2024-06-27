import { MailList } from './MailList.jsx'

export function StarredMail({ emails, onToggleStar }) {

  return (
    <div>
      <MailList emails={emails} onToggleStar={onToggleStar} />
    </div>
  )
}

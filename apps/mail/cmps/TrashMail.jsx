import { MailList } from './MailList.jsx'

export function TrashMail({ emails, onChangeEmail }) {
  emails = emails.filter(e => e.isRemoved)
  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} showRemoveButton={true}  />
    </div>
  )
}
import { MailList } from './MailList.jsx'

export function TrashMail({ emails, onRemoveMail }) {
  emails = emails.filter(e => e.isRemoved)
  return (
    <div>
      <MailList emails={emails} onRemoveMail={onRemoveMail} showRemoveButton={true}  />
    </div>
  )
}
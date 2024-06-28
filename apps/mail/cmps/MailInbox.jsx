import { MailList } from './MailList.jsx'


export function MailInbox({emails, onChangeEmail }) {

  emails = emails.filter(e => e.to === 'user@appsus.com' && !e.isRemoved)

  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} />
    </div>
  )
}

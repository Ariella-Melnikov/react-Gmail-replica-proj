import { MailList } from './MailList.jsx'


export function MailInbox({emails, onChangeEmail, onChangeEmails }) {

  emails = emails.filter(e => e.to === 'user@appsus.com')

  return (
    <div>
      <MailList emails={emails} onChangeEmail={onChangeEmail} />
    </div>
  )
}

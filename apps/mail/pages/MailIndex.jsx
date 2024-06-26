import { MailList } from '../cmps/MailList.jsx'
import { emailService } from '../services/email.service.js'
const { useState, useEffect } = React

export function MailIndex() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    emailService.query().then((fetchedEmails) => {
      setEmails(fetchedEmails)
    })
  }, [])

  return (
    <section>
      <div>mail app</div>
      <MailList emails={emails} />
    </section>
  )
}

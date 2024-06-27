import { MailList } from './MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
const { useState, useEffect } = React


export function MailInbox() {
  const [emails, setEmails] = useState([])
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())

  useEffect(() => {
    loadEmails()
    console.log('filterBy', filterBy)
  }, [filterBy])

  function loadEmails() {
    emailService
      .query(filterBy)
      .then((emails) => setEmails(emails))
      .catch((err) => {
        console.log('err:', err)
      })
  }

  return (
    <div className='main-content'>
      <MailList emails={emails} />
    </div>
  )
}

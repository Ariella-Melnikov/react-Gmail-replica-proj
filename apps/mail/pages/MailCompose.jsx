const { useState } = React

import { emailService } from '../services/email.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailCompose({ onClose }) {
  const [email, setEmail] = useState(emailService.getEmptyEmail())

  function handleChange({ target }) {
    const { name, value } = target
    setEmail((prevEmail) => ({ ...prevEmail, [name]: value }))
  }

  function onSendEmail(ev) {
    ev.preventDefault()
    emailService
      .save(email)
      .then(() => {
        showSuccessMsg(`Message sent`)
        onClose()
      })
      .catch(() => showErrorMsg(`couldn't send message`))
  }

  const { to, subject, body } = email

  return (
    <section className='send-email'>
    <h2>New Message</h2>
    <form onSubmit={onSendEmail}>
      <label className='send-to' htmlFor='to'>Recipients:</label>
      <input onChange={handleChange} value={to} id='to' type='text' name='to' />

      <label className='send-subject' htmlFor='subject'>Subject:</label>
      <input onChange={handleChange} value={subject} id='subject' type='text' name='subject' />

      <label className='send-body' htmlFor='body'>Body:</label>
      <textarea onChange={handleChange} value={body} id='body' name='body' rows='10' />

      <button className='send-btn'>Send</button>
      <button type='button' onClick={onClose} className='cancel-btn'>Cancel</button>
    </form>
  </section>
  )
}

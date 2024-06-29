const { useState, useEffect } = React

import { emailService } from '../services/email.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailCompose({ onClose, onChangeEmail }) {
  const [email, setEmail] = useState(emailService.getEmptyEmail())


  function handleChange({ target }) {
    const { name, value } = target
    setEmail((prevEmail) => ({ ...prevEmail, [name]: value }))
  }

  
  function onCloseComponent() {
    if(email.body || email.subject) {
        email.isDraft = true
        emailService.save(email).then(() => {
          onChangeEmail(email)
          onClose()
        })
    }
    if (!email.body && !email.subject) {
      onClose()
    }
  }

  function onSendEmail(ev) {
    console.log('onSendEmail')
    ev.preventDefault()
    emailService
      .save(email)
      .then(() => {
        console.log('enter success')
        showSuccessMsg('Message sent')
        onClose()
      })
      .catch(() => showErrorMsg('couldn\'t send message'))
  }

  const { to, subject, body } = email

  return (
    <section className='send-email'>
    <h2>New Message
    <button type='button' onClick={onCloseComponent} className='cancel-btn' title="save & close">x</button>
    </h2>
    <form onSubmit={onSendEmail}>
      <label className='send-to' htmlFor='to'>To</label>
      <input onChange={handleChange} value={to} id='to' type='text' name='to' />

      <label className='send-subject' htmlFor='subject'>Subject:</label>
      <input onChange={handleChange} value={subject} id='subject' type='text' name='subject' />

      <label className='send-body' htmlFor='body'></label>
      <textarea onChange={handleChange} value={body} id='body' name='body' rows='10' />

      <button type='submit' className='send-btn' title="Send">Send</button>
      {/* <button type='button' onClick={onCloseComponent} className='cancel-btn'>Cancel</button> */}
    </form>
  </section>
  )
}

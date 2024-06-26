const { useState } = React
const { useNavigate, useParams } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailCompose() {
  const [email, setEmail] = useState(emailService.getEmptyEmail())
  // const navigate = useNavigate()
  // const params = useParams()

  // useEffect(() => {
  //   if (!params.emailId) return
  //   emailService.getById(params.emailId).then(setEmail)
  // }, [])

  function handleChange({ target }) {
    const { name, value } = target
    setEmail((prevEmail) => ({ ...prevEmail, [name]: value }))
  }

  // function handleChangeListPrice({ target }) {
  //   const { type, name: prop } = target
  //   let { value } = target

  //   switch (type) {
  //     case 'range':
  //     case 'number':
  //       value = +value
  //       break

  //     case 'checkbox':
  //       value = target.checked
  //       break
  //   }

  //   setBook((prevBook) => ({
  //     ...prevBook,
  //     listPrice: { ...prevBook.listPrice, [prop]: value },
  //   }))
  // }

  function onSendEmail(ev) {
    ev.preventDefault()
    emailService
      .save(email)
      .then(() => showSuccessMsg(`Message sent`))
      .catch(() => showErrorMsg(`couldn't send message`))
  }

  const { to, subject, body } = email

  return (
    <section className='send-email'>
      <h2>New Message</h2>
      <form onSubmit={onSendEmail}>
        <label className='send-to' htmlFor='recipients'>
          Recipients:
        </label>
        <input onChange={handleChange} value={to} id='recipients' type='text' name='recipients' />

        <label className='send-subject' htmlFor='subject'>
          {'Subject'}
        </label>
        <input onChange={handleChange} value={subject} id='subject' type='text' name='subject' />

        <label className='send-body' htmlFor='body'>
          {' '}
        </label>
        <input onChange={handleChange} value={body} id='body' type='text' name='body' rows='10' />

        <button className='send-btn'>Send</button>
      </form>
    </section>
  )
}

export function MailPreview({ email }) {
  if (!email) {
    return null
  }

  return (
    <article>
      <div className='email-card-select-email'>
      <div className='email-card-from'>{email.from}</div>
        <div className='email-card-subject'>{email.subject} - </div>
        <div className='email-card-body'> {email.body} </div>
        <div className='email-card-sentAt'> {new Date(email.sentAt).toLocaleString()} </div>
      </div>
      </article>
  )
}

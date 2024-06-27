
const { useState, useEffect } = React


import { emailService } from '../services/email.service.js'
export function MailPreview({ email }) {


  if (!email) {
    return null
  }

  function formatDate(sentAt) {
    const date = new Date(sentAt)
    const today = new Date()

    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()

    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else {
      return date.toLocaleDateString([], { year: 'numeric', month: 'numeric', day: 'numeric' })
    }
  }

  const handleStarToggle = () => {
    
    emailService.toggleStar(email.id)
  }

  return (
    <article>
      <div className='email-card-select-email'>
        <div className='email-card'>
          <button  onClick={() => {handleStarToggle()}}>
            <span className='material-icons'>{email.isStarred ? 'star' : 'star_border'}</span>
          </button>
          <div className='email-card-from'>{email.from}</div>
          <div className='email-card-subject-body'>
            <div className='email-card-subject'>{email.subject} - </div>
            <div className='email-card-body'> {email.body} </div>
          </div>
          <div className='email-card-sentAt'> {formatDate(email.sentAt)} </div>
        </div>
      </div>
    </article>
  )
}

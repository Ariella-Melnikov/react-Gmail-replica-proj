
const { useState, useEffect } = React


import { emailService } from '../services/email.service.js'
export function MailPreview({ email, onChangeEmail, showRemoveButton }) {

  useEffect

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
    email.isStarred = !email.isStarred
    onChangeEmail(email)
  }

  const renderActionButton = () => {
    if (showRemoveButton) {
      return (
        <button className='material-icons' onClick={() => onRemoveMail(email.id)}>
          trash
        </button>
      );
    } else {
      return (
        <button className='email-starred-btn' onClick={handleStarToggle}>
          <span>{email.isStarred ? <span className='material-icons custom-icon'>star</span> : <span className='material-icons'>star_border</span>}</span>
        </button>
      );
    }
  };

  return (
    <article>
      <div className='email-card-select-email'>
        {/* <div className='email-card'> */}
          <div className='email-card-btn-from'>
          {renderActionButton()}
          <div className='email-card-from'>{email.from}</div>
          </div>
          <div className='email-card-subject-body'>
            <div className='email-card-subject'>{email.subject} - </div>
            <div className='email-card-body'> {email.body} </div>
          </div>
          <div className='email-card-sentAt'> {formatDate(email.sentAt)} </div>
        {/* </div> */}
      </div> 
    </article>
  )
}

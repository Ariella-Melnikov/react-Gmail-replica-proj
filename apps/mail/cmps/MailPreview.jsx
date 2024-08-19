const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'

export function MailPreview({ email, onChangeEmail, showRemoveButton }) {
  const [isMarked, setIsMarked] = useState(email.isMarked)

  useEffect(() => {
    console.log('I enter the useEffect on preview mail')
  }, [])

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

  const handleReadToggle = () => {
    emailService.toggleRead(email.id)
    email.isRead = !email.isRead
    onChangeEmail(email)
  }

  const handleMarkedToggle = () => {
    emailService.toggleMarked(email.id)
    email.isMarked = !email.isMarked
    onChangeEmail(email)
  }

  const handleRemoveMail = () => {
    emailService.toggleTrash(email.id).then(() => {
      email.isRemoved = true
      onChangeEmail(email)
      showSuccessMsg('Conversation moved to Trash.')
    })
  }

  function extractName(email) {
    if (!email) return
    const parts = email.split('@')
    return parts[0]
  }

  return (
    <article className={`email-card ${email.isRead && 'email-card-read'}`}>
      <div className={`email-card-select-email ${email.isRead && 'email-card-read'}`}>
        <div className='drag-indicator'>
          <span className='material-symbols-outlined'>drag_indicator</span>
        </div>
        <div className='email-card-btn-from'>
          {/* {renderActionButton()} */}
          <button className='starred-btn' title='Starred' onClick={handleStarToggle}>
            <span>
              {email.isStarred ? (
                <span className='material-icons custom-icon'>star</span>
              ) : (
                <span className='material-symbols-outlined'>star_border</span>
              )}
            </span>
          </button>
          <Link key={email.id} to={`/mail/${email.id}`} className="email-card-link">
          <div className='email-card-from'>{extractName(email.from)}</div>
          </Link>
        </div>
        <Link key={email.id} to={`/mail/${email.id}`} className="email-card-link">
          <div className="email-card-subject-body">
            <div className="email-card-subject">{email.subject} - </div>
            <div className="email-card-body">{email.body}</div>
          </div>
        </Link>
        <div className='email-actions'>
          <div className='email-card-sentAt'> {formatDate(email.sentAt)} </div>
          <div className='delete-btn'>
            <span className='material-symbols-outlined' title='Delete' onClick={handleRemoveMail}>
              delete
            </span>
          </div>
          <div className='read-btn' onClick={handleReadToggle}>
            <span>
              {email.isRead ? (
                <span className='material-symbols-outlined' title='Mark as unread'>
                  mark_email_unread
                </span>
              ) : (
                <span className='material-symbols-outlined' title='Mark as read'>
                  drafts
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

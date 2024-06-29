const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
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

  const handleMarkedToggle = () => {
    emailService.toggleMarked(email.id)
    email.isMarked = !email.isMarked
    onChangeEmail(email)
  }

  const handleRemoveMail = () => {
    emailService.toggleTrash(email.id).then(() => {
      email.isRemoved = true
      onChangeEmail(email)
    })
  }

  // const renderActionButton = () => {
  //   if (showRemoveButton) {
  //     return (
  //       <button className='material-symbols-outlined' onClick={() => onRemoveMail(email.id)}>
  //         delete
  //       </button>
  //     );
  //   } else {
  //     return (

  //     );
  //   }
  // };

  return (
    <article className={`email-card ${email.isRead && 'email-card-read'}`}>
      <div className={`email-card-select-email ${email.isRead && 'email-card-read'}`}>
        <div className='drag-indicator'>
          <span className='material-symbols-outlined'>drag_indicator</span>
        </div>
        <div className='email-card-btn-from'>
          <div className='mark-as-read-btn'>
            <button className='email-btn' onClick={handleMarkedToggle}>
              <span>
                {email.isMarked ? (
                  <span className='material-icons custom-icon'>check_box</span>
                ) : (
                  <span className='material-symbols-outlined'>check_box_outline_blank</span>
                )}
              </span>
            </button>
          </div>
          {/* {renderActionButton()} */}
          <button className='email-btn' onClick={handleStarToggle}>
            <span>
              {email.isStarred ? (
                <span className='material-icons custom-icon'>star</span>
              ) : (
                <span className='material-symbols-outlined'>star_border</span>
              )}
            </span>
          </button>
          <button className='email-btn'>
            <Link key={email.id} to={`/mail/${email.id}`} >
              <span className="fa fa-eye"></span>
            </Link>
          </button>
          <div className='email-card-from'>{email.from}</div>
        </div>
        <div className='email-card-subject-body'>
          <div className='email-card-subject'>{email.subject} - </div>
          <div className='email-card-body'> {email.body} </div>
        </div>
        <div className='email-actions email-btn'>
          <div className='email-card-sentAt'> {formatDate(email.sentAt)} </div>
          <div className='delete-btn'>
            <span className='material-symbols-outlined' onClick={handleRemoveMail}>
              delete
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

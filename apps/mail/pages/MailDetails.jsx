const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { EmailModal } from '../cmps/EmailModal.jsx'
import { showErrorMsg } from '../../../services/event-bus.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailDetails({}) {
  const [email, setEmail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadEmail()
  }, [email])


  function loadEmail() {
    setIsLoading(true)
    emailService
      .getById(params.emailId)
      .then((res) => {
        res.isRead = true
        emailService.save(email)
        setEmail(res)
      })
      .catch(() => {
        showErrorMsg('Couldnt get email...')
        navigate(`/mail`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function extractName(email) {
    if (!email) return
    // Split the email address by '@'
    const parts = email.split('@')
    // Return the part before '@' as sender's name
    return parts[0]
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <article className='email-details' >
           <span className='close'>
                <Link to='/mail'>
                    X
                </Link>
            </span>
      <nav className='email-details-nav'>
 
        <Link to={`/mail/${email.prevEmailId}`}>
          <span>
            <i className='material-symbols-outlined custom-icon1' title="Newer">arrow_back_ios</i>
          </span>
        </Link>
        <Link to={`/mail/${email.nextEmailId}`}>
          <span>
            <i className='material-symbols-outlined custom-icon1' title="Older">arrow_forward_ios</i>
          </span>
        </Link>
      </nav>
      <h2>{email.subject}</h2>
      <div className="sender-info">
        <h4>{extractName(email.from)}</h4>
        <span>{email.from}</span>
      </div>
      <p>
        to me: {extractName(email.to)}
        <span className='material-symbols-outlined' title="Show Details" onClick={handleOpenModal}>
          arrow_drop_down
        </span>
        {isModalOpen && <EmailModal email={email} onClose={handleCloseModal} />}
      </p>
      <p className="email-body">{email.body}</p>
    </article>
  )
}

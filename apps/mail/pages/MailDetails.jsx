const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { EmailModal } from '../cmps/EmailModal.jsx'
import { showErrorMsg } from '../../../services/event-bus.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailDetails() {
  const [email, setEmail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadEmail()
  }, [])

  function loadEmail() {
    setIsLoading(true)
    emailService
      .getById(params.emailId)
      .then((res) => {
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
    <article className='email-details'>
      <nav className='email-details-nav'>
        <Link to={`/mail/${email.prevEmailId}`}>
          <button>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </Link>
        <Link to={`/mail/${email.nextEmailId}`}>
          <button>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
        </Link>
      </nav>
      <h2>{email.subject}</h2>
      <span>{extractName(email.from)}</span> <h4>{email.from}</h4>
      <p>
        to me: {extractName(email.to)}
        <span className='material-symbols-outlined' onClick={handleOpenModal}>
          arrow_drop_down
        </span>
        {isModalOpen && <EmailModal email={email} onClose={handleCloseModal} />}
      </p>
      <p>{email.body}</p>
    </article>
  )
}

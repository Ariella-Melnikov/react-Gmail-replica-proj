import { MailList } from '../cmps/MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from './MailCompose.jsx'
import { MailInbox } from '../cmps/MailInbox.jsx'
import { MailSent } from '../cmps/MailSent.jsx'
import { StarredMail } from '../cmps/StarredMail.jsx'
import { TrashMail } from '../cmps/TrashMail.jsx'
import { DraftMail } from '../cmps/DraftMail.jsx'

import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {
  const [currentView, setCurrentView] = useState('inbox')
  const [isComposeOpen, setIsComposeOpen] = useState(false)
  const [emails, setEmails] = useState([])
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())
  const navigate = useNavigate()

  useEffect(() => {
    loadEmails()
  }, [])

  useEffect(() => {
    console.log('loadEmails', emails)
    loadEmails()
  }, [currentView])

  useEffect(() => {
    console.log('emails', emails)
  }, [emails])

  function onChangeEmail(email ={}) {
    let emailsNextState = emails.map((e) => (e.id == email.id ? email : e))
    console.log(emailsNextState)
    setEmails(emailsNextState)
  }

  function onSaveNewEmail(newEmail ={}) {
    let emailsNextState = [...emails, newEmail]
    setEmails(emailsNextState)
  }

  function onChangeFilter(filterBy) {
    console.log('changed filter', filterBy)
    setFilterBy(filterBy)
    loadEmails(filterBy)
  }

  function onChangeEmails(emails) {
    setEmails(emails)
  }

  function loadEmails(filters = filterBy) {
    switch (currentView) {
      case 'inbox':
        emailService
          .query(filters)
          .then((emails) => onChangeEmails(emails))
          .catch((err) => {
            console.error('err:', err)
          })
        break
      case 'sent':
        emailService
          .query(filters)
          .then((emails) => setEmails(emails))
          .catch((err) => {
            console.log('err:', err)
          })
        break
      case 'starred':
        emailService
          .query(filters)
          .then((emails) => onChangeEmails(emails))
          .catch((err) => {
            console.error('err:', err)
          })
        break
      case 'draft':
      case 'trash':
        emailService
          .query(filters)
          .then((emails) => onChangeEmails(emails))
          .catch((err) => {
            console.error('err:', err)
          })
        break
      default:
        break
    }
  }

  function renderCurrentView() {
    switch (currentView) {
      case 'inbox':
        return (
          <MailInbox
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )
      case 'sent':
        return (
          <MailSent
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )
      case 'starred':
        return (
          <StarredMail
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )
      case 'trash':
        return (
          <TrashMail
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )
      case 'draft':
        return (
          <DraftMail
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )

      default:
        return (
          <MailInbox
            emails={emails}
            onChangeEmail={onChangeEmail}
            onChangeEmails={onChangeEmails}
            filterBy={filterBy}
            onChangeFilter={onChangeFilter}
          />
        )
    }
  }

  function toggleCompose() {
    setIsComposeOpen(!isComposeOpen)
  }

  function handleButtonClick(navigationLink, viewname) {
    navigate(navigationLink)
    setCurrentView(navigationLink)
  }

  return (
    <section className='mail-index'>
      <main className='main-container'>
        <aside className='sidebar'>
          <ul>
            <li>
              <div className="compose-btn">
              <button onClick={toggleCompose}>
                <span className='material-symbols-outlined'>edit</span>
                <span className='button-text'>Compose</span>
              </button>
              </div>
            </li>
            <li>
              <button className={`sidebar-btn ${currentView === 'inbox' ? 'active' : ''}`} onClick={() => handleButtonClick('inbox')}>
                <span className='material-symbols-outlined'>inbox</span>
                <span className='button-text'>Inbox</span>
              </button>
            </li>
            <li>
              <button className={`sidebar-btn ${currentView === 'starred' ? 'active' : ''}`} onClick={() => handleButtonClick('starred')}>
                <span className='material-symbols-outlined'>star</span>
                <span className='button-text'>Starred</span>
              </button>
            </li>
            <li>
              <button className={`sidebar-btn ${currentView === 'sent' ? 'active' : ''}`} onClick={() => handleButtonClick('sent')}>
                <span className='material-symbols-outlined'>send</span>
                <span className='button-text'>Send</span>
              </button>
            </li>
            <li>
              <button className={`sidebar-btn ${currentView === 'draft' ? 'active' : ''}`}  onClick={() => handleButtonClick('draft')}>
                <span className='material-symbols-outlined'>draft</span>
                <span className='button-text'>Draft</span>
              </button>
            </li>
            <li>
              <button  className={`sidebar-btn ${currentView === 'trash' ? 'active' : ''}`} onClick={() => handleButtonClick('trash')}>
                <span className='material-symbols-outlined'>delete</span>
                <span className='button-text'>Trash</span>
              </button>
            </li>
          </ul>
        </aside>

        <div className='emails-lst-container'>{renderCurrentView()}</div>
        {/* <MailFilter  filterBy={filterBy} onSetFilter={onSetFilter} /> */}
        {isComposeOpen && <MailCompose onClose={toggleCompose} onChangeEmail={onSaveNewEmail} />}
      </main>
    </section>
  )
}

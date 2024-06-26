import { MailList } from '../cmps/MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx';
import { MailInbox } from '../cmps/MailInbox.jsx';
import { MailSent } from '../cmps/MailSent.jsx';

const { useState, useEffect } = React
const { Outlet, NavLink } = ReactRouterDOM


export function MailIndex() {
//   const [emails, setEmails] = useState([])
//   const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())
  const [currentView, setCurrentView] = useState('inbox');


//   useEffect(() => {
//     loadEmails()
//     console.log('filterBy', filterBy)
//   }, [filterBy])

//   function loadEmails() {
//     emailService
//       .query(filterBy)
//       .then((emails) => setEmails(emails))
//       .catch((err) => {
//         console.log('err:', err)
//       })
//   }

//   function onSetFilter(filterBy) {
//     setFilterBy({ ...filterBy })
//   }

  function renderCurrentView() {
    switch (currentView) {
    //   case 'compose':
    //     return <MailCompose />;
      case 'inbox':
        return <MailInbox emails={emails} />;
      case 'sent':
        return <MailSent emails={emails} />;
      default:
        return <MailInbox emails={emails} />;
    }
  }


// if (!emails) return <div>Loading...</div>


  return (
    <section className='mail-index'>
      <header className='mail-header'>
        <div>Gmail Logo</div>
      </header>
      <aside className='sidebar'>
        <ul>
          <li><button onClick={() => setCurrentView('compose')}>Compose</button></li>
          <li><button onClick={() => setCurrentView('inbox')}>Inbox</button></li>
          <li><button onClick={() => setCurrentView('sent')}>Sent</button></li>
        </ul>
      </aside>
      <div className='main-content'>
        {renderCurrentView()}
      </div>
      {/* <MailFilter  filterBy={filterBy} onSetFilter={onSetFilter} /> */}
      {/* <MailList emails={emails} /> */}
    </section>
  )
}

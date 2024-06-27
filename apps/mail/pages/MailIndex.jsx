import { MailList } from '../cmps/MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from './MailCompose.jsx';
import { MailInbox } from '../cmps/MailInbox.jsx';
import { MailSent } from '../cmps/MailSent.jsx';

const { useState, useEffect } = React
const { Outlet, NavLink } = ReactRouterDOM


export function MailIndex() {
  const [currentView, setCurrentView] = useState('inbox');
  const [isComposeOpen, setIsComposeOpen] = useState(false);


  function renderCurrentView() {
    switch (currentView) {
      case 'inbox':
        return <MailInbox emails={emails} />;
      case 'sent':
        return <MailSent emails={emails} />;
      default:
        return <MailInbox emails={emails} />;
    }
  }

  function toggleCompose() {
    setIsComposeOpen(!isComposeOpen);
  }



  return (
    <section className='mail-index'>
      <header className='mail-header'>
        <div>Gmail Logo</div>
      </header>
      <main className="main-container">
      <aside className='sidebar'>
        <ul>
          <li><button onClick={toggleCompose}>
            Compose
            </button></li>
          <li><button  onClick={() => setCurrentView('inbox')}>
          <span className="material-icons">inbox</span>
          <span className="button-text">Inbox</span></button></li>
          <li><button onClick={() => setCurrentView('sent')}>Sent</button></li>
        </ul>
      </aside>
      <div className='main-content'>
        {renderCurrentView()}
      </div>
      {/* <MailFilter  filterBy={filterBy} onSetFilter={onSetFilter} /> */}
      {isComposeOpen && <MailCompose onClose={toggleCompose} />}
      </main>  
    </section>
  )
}

import { MailList } from '../cmps/MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from './MailCompose.jsx';
import { MailInbox } from '../cmps/MailInbox.jsx';
import { MailSent } from '../cmps/MailSent.jsx';
import { StarredMail } from '../cmps/StarredMail.jsx';

const { useState, useEffect } = React
const { Outlet, NavLink } = ReactRouterDOM


export function MailIndex() {
  const [currentView, setCurrentView] = useState('inbox');
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  // const [emails, setEmails] = useState([]);



  // useEffect(() => {
  //   loadEmails();
  // }, []);

  // function loadEmails() {
  //   emailService.query().then((emails) => setEmails(emails));
  // }
  function renderCurrentView() {
    switch (currentView) {
      case 'inbox':
        return <MailInbox emails={emails} />;
      case 'sent':
        return <MailSent emails={emails} />;
        case 'starred':
          return <StarredMail emails={emails} />;
      default:
        return <MailInbox emails={emails} />;
    }
  }
  function handleToggleStar(emailId) {
    emailService.toggleStar(emailId).then(() => {
      setEmails((prevEmails) =>
        prevEmails.map((email) =>
          email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
        )
      );
    });
  }

  // function renderCurrentView() {
  //   switch (currentView) {
  //     case 'inbox':
  //       return <MailInbox />;
  //     case 'sent':
  //       return <MailSent />;
  //     case 'starred':
  //       return <StarredMail />;
  //     default:
  //       return <MailInbox />;
  //   }
  // }
 

  function toggleCompose() {
    setIsComposeOpen(!isComposeOpen);
  }



  return (
    <section className='mail-index'>
    <main className="main-container">
      <header className='mail-header'>
        <div>Gmail Logo</div>
      </header>
      <aside className='sidebar'>
        <ul>
          <li><button onClick={toggleCompose}>
          <span className="material-icons">edit</span>
          <span className="button-text">Compose</span>
            </button></li>
          <li><button  onClick={() => setCurrentView('inbox')}>
          <span className="material-icons">inbox</span>
          <span className="button-text">Inbox</span></button></li>
          <li><button onClick={() => setCurrentView('sent')}>
            Sent</button></li>
            <li><button  onClick={() => setCurrentView('starred')}>
          <span className="material-icons">star_rate</span>
          <span className="button-text">Starred</span>
          </button></li>
        </ul>
      </aside>

      <div className='emails-lst-container'>
        {renderCurrentView()}
      </div>
      {/* <MailFilter  filterBy={filterBy} onSetFilter={onSetFilter} /> */}
      {isComposeOpen && <MailCompose onClose={toggleCompose} />}
      </main>  
    </section>
  )
}

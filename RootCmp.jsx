const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'
import { MailDetails } from './apps/mail/pages/MailDetails.jsx'
import { MailCompose } from './apps/mail/pages/MailCompose.jsx'
import { MailInbox } from './apps/mail/cmps/MailInbox.jsx' 
import { MailSent } from './apps/mail/cmps/MailSent.jsx'
import { StarredMail } from './apps/mail/cmps/StarredMail.jsx'
import { TrashMail } from './apps/mail/cmps/TrashMail.jsx'
import { DraftMail } from './apps/mail/cmps/DraftMail.jsx'

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/mail' element={<MailIndex />}>
            <Route path='/mail/inbox' element={<MailInbox />} />
            <Route path='/mail/sent' element={<MailSent />} />
            <Route path='/mail/starred' element={<StarredMail />} />
            <Route path='/mail/trash' element={<TrashMail />} />
            <Route path='/mail/draft' element={<DraftMail />} />

          </Route>
          <Route path='/mail/:emailId' element={<MailDetails />} />
          <Route path='/mail/compose' element={<MailCompose />} />
          <Route path='/note' element={<NoteIndex />} />
        </Routes>
      </section>
    </Router>
  )
}

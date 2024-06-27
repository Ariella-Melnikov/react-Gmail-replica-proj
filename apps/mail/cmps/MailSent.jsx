import { MailList } from './MailList.jsx'
import { emailService } from '../services/email.service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'

const { useState, useEffect } = React

export function MailSent({emails, onChangeEmail}) {

  useEffect(() => {

  }, [])


  return (
    <div>
      <MailList emails={emails} />
    </div>
  )
}

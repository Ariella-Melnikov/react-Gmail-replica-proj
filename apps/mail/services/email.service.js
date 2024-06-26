// mail service
import { emails as staticEmails } from './emails.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_KEY = 'mailDB'

export const emailService = {
  query,
  getById,
  remove,
  save,
}

function query() {
  return asyncStorageService.query(EMAIL_KEY).then((emails) => {
    if (!emails || !emails.length) {
      emails = staticEmails.map((email) => ({
        ...email,
      }))
      storageService.saveToStorage(EMAIL_KEY, emails)
    }
    return emails
  })
}

function getById(emailId) {
  return asyncStorageService.get(EMAIL_KEY, emailId)
}

function remove(emailId) {
  return asyncStorageService.remove(EMAIL_KEY, emailId)
}

function save(email) {
  if (email.id) {
    return asyncStorageService.put(EMAIL_KEY, email)
  } else {
    const newEmail = _createEmail(email.subject, email.body)
    return asyncStorageService.post(EMAIL_KEY, newEmail)
  }
}

function _createEmail(subject, body) {
  const currentTimestamp = Date.now()
  return {
    id: utilService.makeId(),
    createdAt: currentTimestamp,
    subject,
    body,
    isRead: false,
    sentAt: currentTimestamp,
    removedAt: null,
    from: getRandomEmail(),
    to: 'user@appsus.com',
  }
}

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

function getRandomEmail() {
  const domains = ['example.com', 'sample.org', 'test.net', 'demo.co.il']
  const randomName = Math.random().toString(36).substring(2, 11)
  const randomDomain = domains[Math.floor(Math.random() * domains.length)]
  return `${randomName}@${randomDomain}`
}

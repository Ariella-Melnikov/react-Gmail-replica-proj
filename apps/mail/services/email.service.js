// mail service
import { emails as staticEmails } from './emails.js'
import { newEmails as staticNewEmails } from './emails.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_KEY = 'mailDB'
const NEWEMAIL_KEY = 'newMailDB'

export const emailService = {
  query,
  queryNewEmail,
  getById,
  remove,
  save,
  getFilterBy,
  setFilterBy,
  getDefaultFilter,
  getEmptyEmail,
}

function query(filterBy = {}) {
  return asyncStorageService.query(EMAIL_KEY).then((emails) => {
    // If no emails found in storage, use staticEmails and save to storage
    if (!emails || emails.length === 0) {
      return staticEmails.map((email) => ({ ...email }))
    }
    return emails
  })
}

function queryNewEmail(filterBy = {}) {
  return asyncStorageService.query(NEWEMAIL_KEY).then((emails) => {
    // If no emails found in storage, use staticEmails and save to storage
    if (!emails || emails.length === 0) {
      return staticNewEmails.map((email) => ({ ...email }))
    }
    return emails
  })
}

// // Apply filters
// if (filterBy.status) {
//   switch (filterBy.status) {
//     case 'inbox':
//       emails = emails.filter((email) => !email.removedAt && email.to === loggedinUser.email);
//       break;
//     case 'sent':
//       emails = emails.filter((email) => email.from === loggedinUser.email);
//       break;
//     case 'trash':
//       emails = emails.filter((email) => email.removedAt !== null);
//       break;
//     case 'draft':
//       emails = emails.filter((email) => email.removedAt === null && !email.sentAt);
//       break;
//     default:
//       break;
//   }
// }

// if (filterBy.txt) {
//   const regex = new RegExp(filterBy.txt, 'i');
//   emails = emails.filter((email) => regex.test(email.subject) || regex.test(email.body));
// }

// if (filterBy.isRead !== undefined) {
//   emails = emails.filter((email) => email.isRead === filterBy.isRead);
// }

// if (filterBy.isStared !== undefined) {
//   emails = emails.filter((email) => email.isStarred === filterBy.isStared);
// }

// if (filterBy.labels && filterBy.labels.length > 0) {
//   emails = emails.filter((email) => {
//     for (let label of filterBy.labels) {
//       if (email.labels && email.labels.includes(label)) {
//         return true;
//       }
//     }
//     return false;
//   });
// }

//     return emails;
//   });
// }

function getById(emailId) {
  return asyncStorageService.get(EMAIL_KEY, emailId)
}

function remove(emailId) {
  return asyncStorageService.remove(EMAIL_KEY, emailId)
}

// function save(email) {
//   if (email.id) {
//     return asyncStorageService.put(EMAIL_KEY, email)
//   } else {
//     const newEmail = _createEmail(email.subject, email.body)
//     return asyncStorageService.post(EMAIL_KEY, newEmail)
//   }
// }

function save(email) {
  if (email.id) {
    // Update existing email
    return asyncStorageService.put(EMAIL_KEY, email)
  } else {
    // Create new email
    const newEmail = _createEmail(email.to, email.subject, email.body)
    newEmail.isSent = true // Mark the email as sent
    return asyncStorageService.post(NEWEMAIL_KEY, newEmail)
  }
}

function getFilterBy() {
  return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
  if (filterBy.from !== undefined) gFilterBy.from = filterBy.from
  if (filterBy.subject !== undefined) gFilterBy.subject = filterBy.subject
  return gFilterBy
}

function getDefaultFilter() {
  return { status: '', txt: '', isRead: '', isStarred: '', lables: '' } // Example default filter values
}

function _createEmail(to, subject, body) {
  const currentTimestamp = Date.now()
  return {
    id: utilService.makeId(),
    createdAt: currentTimestamp,
    subject,
    body,
    isRead: false,
    sentAt: currentTimestamp,
    removedAt: null,
    from: 'user@appsus.com',
    to,
  }
}

function getEmptyEmail(to = '', subject = '', body = '') {
  return {
    id: utilService.makeId(),
    createdAt: currentTimestamp,
    subject,
    body,
    sentAt: currentTimestamp,
    removedAt: null,
    from: 'user@appsus.com',
    to,
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

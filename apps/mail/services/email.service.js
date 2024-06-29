// mail service
import { emails as staticEmails } from './emails.js'
import { newEmails as staticNewEmails } from './emails.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_KEY = 'mailDB'
export const TIME_RANGES = Object.freeze({
  ANY_TIME: 'any_time',
  WEEK_AGO: '1_week_ago',
  MONTH_AGO: '1_month_ago',
  SIX_MONTHS_AGO: '6_month_ago',
  YEAR_AGO: '1_year_ago',
})

export const emailService = {
  query,
  getById,
  remove,
  save,
  getFilterBy,
  setFilterBy,
  getDefaultFilter,
  getEmptyEmail,
  toggleStar,
  toggleTrash,
  toggleMarked,
}

function query(filterBy = getDefaultFilter()) {
  return asyncStorageService.query(EMAIL_KEY).then((emails) => {
    // If no emails found in storage, use staticEmails and save to storage
    if (!emails || emails.length === 0) {
      emails = staticEmails.map((email) => ({
        ...email,
      }))
      storageService.saveToStorage(EMAIL_KEY, emails)
    }

    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      emails = emails.filter((email) => regex.test(email.subject) || regex.test(email.body) || regex.test(email.from) || regex.test(email.to) )
    }

    if (filterBy.isRead) {
      emails = emails.filter((email) => email.isRead === filterBy.isRead)
    }

    if (filterBy.sent_at) {
      // let now = new Date();
      // switch (filterBy.sent_at) {
      //   case TIME_RANGES.WEEK_AGO:
      //     let sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
      //     emails = emails.filter((email) => email.sentAt && email.sentAt > sevenDaysAgo)
      //     break
      //   case TIME_RANGES.YEAR_AGO:
      //     let year_ago = new Date(now.setFullYear(now.getFullYear() - 1));
      //     emails = emails.filter((email) => email.sentAt && email.sentAt > year_ago)
      //     break
      //   default:
      //     break
      // }
    }

    return emails
  })
}

// function querySentEmail(filterBy = {}) {
//   return asyncStorageService.query(NEWEMAIL_KEY).then((emails) => {
//     // If no emails found in storage, use staticEmails and save to storage
//     if (!emails || emails.length === 0) {
//       emails =  staticNewEmails.map((email) => ({
//         ...email }))
//         storageService.saveToStorage(NEWEMAIL_KEY, emails)
//     }
//     return emails
//   })
// }

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
  return asyncStorageService.get(EMAIL_KEY, emailId).then((email) => _setNextPrevEmailId(email))
}

// .then((email) => _setNextPrevEmailId(email))

function remove(emailId) {
  return asyncStorageService.remove(EMAIL_KEY, emailId)
}

function save(email) {
  console.log('save', email)
  if (email.id) {
    return asyncStorageService.put(EMAIL_KEY, email)
  } else {
    const newEmail = _createEmail(email.to, email.subject, email.body)
    newEmail.isSent = true // Mark the email as sent
    return asyncStorageService.post(EMAIL_KEY, newEmail)
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
  return { status: 'all', txt: '', isRead: false,  sent_at: TIME_RANGES.ANY_TIME, lables: [] } // Example default filter values
}

function toggleStar(emailId) {
  return getById(emailId).then((email) => {
    email.isStarred = !email.isStarred
    return save(email)
  })
}

function toggleMarked(emailId) {
  return getById(emailId).then((email) => {
    email.isMarked = !email.isMarked
    return save(email)
  })
}

function toggleTrash(emailId) {
  return getById(emailId).then((email) => {
    if (email.isRemoved) {
      return remove(emailId)
    }

    email.isRemoved = true
    return save(email)
  })
}

function _createEmail(to, subject, body) {
  const currentTimestamp = Date.now()
  return {
    id: utilService.makeId(),
    createdAt: currentTimestamp,
    subject,
    body,
    isStarred: false,
    isRead: false,
    sentAt: currentTimestamp,
    removedAt: null,
    from: 'user@appsus.com',
    to,
  }
}

function getEmptyEmail(to = '', subject = '', body = '') {
  const currentTimestamp = Date.now()
  const timeDiff = 10 * 60 * 1000
  return {
    createdAt: currentTimestamp - timeDiff,
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

function _setNextPrevEmailId(email) {
  return asyncStorageService
    .query(EMAIL_KEY)
    .then((emails) => {
      const emailIdx = emails.findIndex((currEmail) => currEmail.id === email.id)
      const nextEmail = emails[emailIdx + 1] ? emails[emailIdx + 1] : emails[0]
      const prevEmail = emails[emailIdx - 1] ? emails[emailIdx - 1] : emails[emails.length - 1]
      email.nextEmailId = nextEmail.id
      email.prevEmailId = prevEmail.id
      return email
    })
    .catch((err) => {
      console.error(err)
      return email
    })
}

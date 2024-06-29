import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

let gHardCoded
const NOTES_KEY = 'noteDB'

// Initialize notes if not already in localStorage
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    getDefaultFilter,
    save,
    getEmptyNote,
}

function query(filterBy = {}) {
    return asyncStorageService.query(NOTES_KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                notes = gHardCoded
                _saveNotesToStorage()
            }
            
            // Filter by type
            if (filterBy.type) {
                const regExp = new RegExp(filterBy.type, "i")
                notes = notes.filter((note) => regExp.test(note.type))
            }
            
            // Filter by text
            if (filterBy.text) {
                const regExp = new RegExp(filterBy.text, "i")
                notes = notes.filter((note) => regExp.test(note.info.txt))
            }
            
            return notes
        })
}

function get(noteId) {
    return asyncStorageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTES_KEY, noteId)
}

function getDefaultFilter() {
    return { text: '', type: '' }
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTES_KEY, note)
    } else {
        const newNote = _createNote(note.title)
        return asyncStorageService.post(NOTES_KEY, newNote)
    }
}


function _saveNotesToStorage() {
    asyncStorageService.save(NOTES_KEY, gHardCoded)
}


function getEmptyNote(type, title = '') {
    return { title, type }

}

function _createNote(title) {
    return {
        id: utilService.makeId(5),
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#f6e2dd'
        },
        info: {
            txt: title
        }
    }
  }

function _createNotes() {
    gHardCoded = storageService.loadFromStorage(NOTES_KEY)
    if (!gHardCoded || !gHardCoded.length) {
        gHardCoded = [
            {
                id: 'n101',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#f6e2dd'
                },
                info: {
                    txt: 'There are 10 types of people in this world, those who no binary and those who dont!'
                }
            },
            {
                id: 'n102',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#d1f7c4'
                },
                info: {
                    txt: 'Why do programmers prefer dark mode? Because light attracts bugs!'
                }
            },
            {
                id: 'n103',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#c9e8f6'
                },
                info: {
                    txt: 'A SQL query walks into a bar, walks up to two tables and asks, "Can I join you?"'
                }
            },
            {
                id: 'n104',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#f4f0c4'
                },
                info: {
                    txt: 'Why do Java developers wear glasses? Because they don’t C#.'
                }
            },
            {
                id: 'n105',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#e1d4f6'
                },
                info: {
                    txt: 'There are 10 types of people in the world: those who understand binary and those who don’t.'
                }
            },
            {
                id: 'n106',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#f6dfd9'
                },
                info: {
                    txt: 'How many programmers does it take to change a light bulb? None, that’s a hardware problem.'
                }
            },
            {
                id: 'n107',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#c4f6d3'
                },
                info: {
                    txt: 'I would tell you a UDP joke, but you might not get it.'
                }
            },
            {
                id: 'n108',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#f6e5c4'
                },
                info: {
                    txt: 'Why do programmers hate nature? It has too many bugs.'
                }
            },
            {
                id: 'n109',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#c4daf6'
                },
                info: {
                    txt: 'A programmer’s wife tells him: "Run to the store and get a loaf of bread. If they have eggs, get a dozen." The programmer comes home with 12 loaves of bread.'
                }
            },
            {
                id: 'n110',
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#f6c4d9'
                },
                info: {
                    txt: 'In order to understand recursion, you must first understand recursion.'
                }
            }
        ]
        storageService.saveToStorage(NOTES_KEY, gHardCoded)
    }
}

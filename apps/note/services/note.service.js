// note service

import { storageService as asyncStorageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


let gHardCodedNotes
const NOTES_KEY = 'noteDB'
createNotes()

export const noteService = {
    query,
    get,
    remove,
}

 

function query() {
    return asyncStorageService.query(NOTES_KEY)
    .then(notes => {

        return notes
    })
}


function get(noteId) {
    return asyncStorageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTES_KEY, noteId)
}
function createNotes() {
    gHardCodedNotes = storageService.loadFromStorage(NOTES_KEY);
    if (!gHardCodedNotes || !gHardCodedNotes.length) {
        gHardCodedNotes = [
            {
                id: 'n101',
                createdAt: 1112233,
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#0d0'
                },
                info: {
                    txt: 'Hello World!'
                }
            },
            {
                id: 'n102',
                createdAt: 1112244,
                type: 'NoteImg',
                isPinned: true,
                info: {
                    url: 'http://some-img/me2',
                    title: 'Lunch Time'
                },
                style: {
                    backgroundColor: '#d00'
                }
            },
            // Additional notes...
            {
                id: 'n120',
                createdAt: 1112422,
                type: 'NoteImg',
                isPinned: true,
                info: {
                    url: 'http://some-img/me20',
                    title: 'Snowy Mountains'
                },
                style: {
                    backgroundColor: '#d00'
                }
            }
        ];
        storageService.saveToStorage(NOTES_KEY, gHardCodedNotes);
    }

}
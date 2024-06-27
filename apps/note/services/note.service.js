// note service

import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'


let gHardCodedNotes
const NOTES_KEY = 'noteDB'
const NEW_NOTES_KEY = 'newnoteDB'
createNotes()

export const noteService = {
    query,
    queryNewNote,
    get,
    remove,
    createTxtNote,
}



 

function query() {
    return asyncStorageService.query(NOTES_KEY)
    .then(notes => {

        return notes
    })
}

function queryNewNote(){

}


function get(noteId) {
    return asyncStorageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTES_KEY, noteId)
}


async function createTxtNote(subject, content) {
    let notes = await asyncStorageService.query(NOTES_KEY)
    let note = {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: utilService.getRandomColor()
        },
        info: {
            txt: content,
            subject: subject,
        }
    }

    console.log(note)
    notes.push(note)
    await asyncStorageService.post(NOTES_KEY, note)
}


function createNotes() {
    gHardCodedNotes = storageService.loadFromStorage(NOTES_KEY);
    if (!gHardCodedNotes || !gHardCodedNotes.length) {
        const gHardCodedNotes = [
            {
              id: 'n101',
              createdAt: 1112233,
              type: 'NoteImg',
              isPinned: false,
              style: {
                backgroundColor: '#0d0'
              },
              info: {
                url: 'http://some-img/me1',
                title: 'Morning View'
              }
            },
            {
              id: 'n102',
              createdAt: 1112244,
              type: 'NoteTodo',
              isPinned: true,
              style: {
                backgroundColor: '#d00'
              },
              info: {
                todos: [
                  { id: 't1', txt: 'Buy milk', isDone: false },
                  { id: 't2', txt: 'Call John', isDone: true }
                ],
                subject: 'Daily Tasks',
                subjectValue: 'Personal'
              }
            },
            {
              id: 'n103',
              createdAt: 1112255,
              type: 'NoteTxt',
              isPinned: false,
              style: {
                backgroundColor: '#00d'
              },
              info: {
                txt: 'Meeting at 3 PM',
                subject: 'Meeting',
                subjectValue: '3 PM'
              }
            },
            {
              id: 'n104',
              createdAt: 1112266,
              type: 'NoteVideo',
              isPinned: true,
              style: {
                backgroundColor: '#ddd'
              },
              info: {
                videoUrl: 'http://some-video/v1',
                title: 'How to make pasta'
              }
            },
            {
              id: 'n105',
              createdAt: 1112277,
              type: 'NoteImg',
              isPinned: false,
              style: {
                backgroundColor: '#ff0'
              },
              info: {
                url: 'http://some-img/me2',
                title: 'Evening Relaxation'
              }
            },
            {
              id: 'n106',
              createdAt: 1112288,
              type: 'NoteTodo',
              isPinned: true,
              style: {
                backgroundColor: '#0ff'
              },
              info: {
                todos: [
                  { id: 't3', txt: 'Schedule car service', isDone: false },
                  { id: 't4', txt: 'Finish project report', isDone: true }
                ],
                subject: 'Work Tasks',
                subjectValue: 'Urgent'
              }
            },
            {
              id: 'n107',
              createdAt: 1112299,
              type: 'NoteTxt',
              isPinned: false,
              style: {
                backgroundColor: '#f0f'
              },
              info: {
                txt: 'Grocery shopping list: Eggs, Bread, Apples',
                subject: 'Grocery List',
                subjectValue: 'Shopping'
              }
            },
            {
              id: 'n108',
              createdAt: 1112300,
              type: 'NoteVideo',
              isPinned: true,
              style: {
                backgroundColor: '#0df'
              },
              info: {
                videoUrl: 'http://some-video/v2',
                title: 'Yoga for beginners'
              }
            },
            {
              id: 'n109',
              createdAt: 1112311,
              type: 'NoteImg',
              isPinned: false,
              style: {
                backgroundColor: '#ddd'
              },
              info: {
                url: 'http://some-img/me3',
                title: 'Holiday Memories'
              }
            },
            {
              id: 'n110',
              createdAt: 1112322,
              type: 'NoteTodo',
              isPinned: true,
              style: {
                backgroundColor: '#a00'
              },
              info: {
                todos: [
                  { id: 't5', txt: 'Renew gym membership', isDone: false },
                  { id: 't6', txt: 'Order new books online', isDone: false }
                ],
                subject: 'Renewals',
                subjectValue: 'Monthly'
              }
            },
            {
              id: 'n111',
              createdAt: 1112333,
              type: 'NoteTxt',
              isPinned: false,
              style: {
                backgroundColor: '#0a0'
              },
              info: {
                txt: 'Update resume for job application',
                subject: 'Job Application',
                subjectValue: 'Resume Update'
              }
            },
            {
              id: 'n112',
              createdAt: 1112344,
              type: 'NoteVideo',
              isPinned: true,
              style: {
                backgroundColor: '#00a'
              },
              info: {
                videoUrl: 'http://some-video/v3',
                title: 'Best DIY Projects'
              }
            },
            {
              id: 'n113',
              createdAt: 1112355,
              type: 'NoteImg',
              isPinned: false,
              style: {
                backgroundColor: '#b0b'
              },
              info: {
                url: 'http://some-img/me4',
                title: 'Pet Adventures'
              }
            },
            {
              id: 'n114',
              createdAt: 1112366,
              type: 'NoteTodo',
              isPinned: true,
              style: {
                backgroundColor: '#bba'
              },
              info: {
                todos: [
                  { id: 't7', txt: 'Prepare for Monday presentation', isDone: true },
                  { id: 't8', txt: 'Check emails', isDone: false }
                ],
                subject: 'Work Tasks',
                subjectValue: 'Monday'
              }
            },
            {
              id: 'n115',
              createdAt: 1112377,
              type: 'NoteTxt',
              isPinned: false,
              style: {
                backgroundColor: '#abc'
              },
              info: {
                txt: 'Call plumber to fix kitchen sink',
                subject: 'Home Maintenance',
                subjectValue: 'Plumbing'
              }
            },
            {
              id: 'n116',
              createdAt: 1112388,
              type: 'NoteVideo',
              isPinned: true,
              style: {
                backgroundColor: '#cba'
              },
              info: {
                videoUrl: 'http://some-video/v4',
                title: 'Cooking Basics: The Easy Way'
              }
            },
            {
              id: 'n117',
              createdAt: 1112399,
              type: 'NoteImg',
              isPinned: false,
              style: {
                backgroundColor: '#ccd'
              },
              info: {
                url: 'http://some-img/me5',
                title: 'Scenic Routes for Cycling'
              }
            },
          ];
          
        storageService.saveToStorage(NOTES_KEY, gHardCodedNotes);
    }

}



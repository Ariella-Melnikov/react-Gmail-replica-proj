
// import { noteService } from "../services/note.service.js"
// import { NoteList } from "../cmps/NoteList.jsx";
// import { NoteFilter } from "../cmps/NoteFilter.jsx";


// const { Link, useSearchParams } = ReactRouterDOM
// const { useState, useEffect, useRef } = React





// export function NoteIndex() {

//     const [notes, setNotes] = useState([])


//     useEffect(() => {
//         noteService.query().then(notes => { setNotes(notes) })
//     }, [])

 
//     function onSelectNoteId(noteId) {
//         setSelectedBookId(noteId)
//     }
//     function onRemoveNote(noteId) {
//         noteService.remove(noteId).then(() => {
//             setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
//         })
//     }




//     return (
//         <section className='note-index'>
//             <React.Fragment>
//                 <NoteFilter/>
//                     <NoteList
//                         notes={notes}
//                         onRemoveNote={onRemoveNote}
//                         onSelectNoteId={onSelectNoteId} />
//             </React.Fragment>
//         </section>

//     )
// }

export function NoteIndex(){
    <h1></h1>
}
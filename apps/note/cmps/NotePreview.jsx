


export function NotePreview({ note }) {



    return (

        <section style ={note.style} className='note-preview'>
            <h2>{note.id}</h2>
            <h3>{note.type}</h3>
            <p>{note.info.txt}</p>

        </section>
    )
}

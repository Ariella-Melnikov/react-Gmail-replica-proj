import { noteService } from "../services/note.service.js";

const { useState, useEffect, useRef } = React






export function NoteAdd({ onNewNoteSaved }) {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const onNoteSubmit = (e) => {
        e.preventDefault();
        // console.log('Subject:', subject);
        // console.log('Content:', content);
        noteService.createTxtNote(subject,content)
        // Add any additional logic for handling the new note submission here
    };

    return (
        <section className="note-add-container">
            <form onSubmit={onNoteSubmit}>
                <input 
                    type="text"
                    id="byText"
                    name="subject"
                    className="input note-add-input-subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={handleSubjectChange}
                />
                {subject && (
                    <input 
                        type="text"
                        id="byText"
                        name="content"
                        className="input note-add-input-content"
                        placeholder="Content"
                        value={content}
                        onChange={handleContentChange}
                    />
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
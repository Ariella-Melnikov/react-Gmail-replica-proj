
const { useState, useEffect, useRef } = React






export function NoteAdd({ onNewNoteSaved }) {
    const [subject, setSubject] = useState('');

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    // const handleContentChange = (e)

    const onNoteSubmit = (e) => {
        e.preventDefault();
        console.log('Subject:', subject);
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
                    placeholder="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                />
                {subject && (
                    <input 
                        type="text"
                        id="byText"
                        name="content"
                        className="input note-add-input-content"
                        placeholder="content"
                        // value={content}
                        // onChange={handleContentChange}
                    />
                )}
                <button type="submit">submit</button>
            </form>
        </section>
    );
}

const { useState, useEffect, useRef } = React




export function NoteAdd() {


    const [subject, setSubject] = useState('');

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const checkSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <section className="note-add-container">
            <form onSubmit={checkSubmit}>
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
                    />
                )}
            </form>
        </section>
    );
}


function checkSubmit(){console.log(this)}


export function NoteAdd() {





    return (
        <section className="note-add-container">
        <form onSubmit={checkSubmit(this)}>
            <input
                type="text"
                id="byText"
                name="text"
                className="input note-add-input-subject"
                placeholder="subject"
                
            />
            <input
                type="text"
                id="byText"
                name="text"
                className="input note-add-input-content"
                placeholder="content"
            />
        </form>
        </section>
    );
}
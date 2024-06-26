


const NoteTxt = ({ note }) => {
    return (
        <div style={{ backgroundColor: note.style.backgroundColor }}>
            <p>{note.info.txt}</p>
        </div>
    )
}

export default NoteTxt


const { useState, useEffect, useRef } = React


const Modal = () => {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const showModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      alert('Form submitted!');
      closeModal();
    };

}

export function AddModal() {
   
    if (!isVisible) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Modal Title</h2>
          <form onSubmit={onSubmit}>
            <label>
              Your Input:
              <input type="text" required />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    );
  };


export function ModalBtn(){
    return(
        <div>
        <button onClick={showModal}>AddNote</button>
        </div>
    )
}
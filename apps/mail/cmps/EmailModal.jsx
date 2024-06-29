


import { emailService } from "../services/email.service"

export function EmailModal({ email, onClose }) {
  if (!email) return null;

  function formatDate(sentAt) {
    const date = new Date(sentAt);
    return date.toLocaleString();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Email Details</h2>
        <p><strong>From:</strong> {email.from}</p>
        <p><strong>To:</strong> {email.to}</p>
        <p><strong>Sent At:</strong> {formatDate(email.sentAt)}</p>
        <p><strong>Subject:</strong> {email.subject}</p>
      </div>
    </div>
  );
}
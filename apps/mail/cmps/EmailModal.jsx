


import { emailService } from "../services/email.service"

export function EmailModal({ email, onClose }) {
  if (!email) return null;

  function formatDate(sentAt) {
    const date = new Date(sentAt);
    return date.toLocaleString();
  }

  return (
    <div className="modal">
      <div className="email-modal">
        <span className="close" onClick={onClose}>&times;</span>
        <p><strong>From:</strong> <span>{email.from}</span></p>
        <p><strong>To:</strong> <span>{email.to}</span></p>
        <p><strong>Sent At:</strong> <span>{formatDate(email.sentAt)}</span></p>
        <p><strong>Subject:</strong> <span>{email.subject}</span></p>
      </div>
    </div>
  );
}
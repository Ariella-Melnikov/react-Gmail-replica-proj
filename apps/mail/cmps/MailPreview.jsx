export function MailPreview({ email }) {
  if (!email) {
    return null
  }

  return (
    <article>
      <div className='email-card-select-email'>
      <div className='email-card-from'>{email.from}</div>
        <div className='email-card-subject'>{email.subject}</div>
      </div>

      <div className='email-card-body-preview'>
        <div className='email-card-body'>
          <span className='book-card-details-title'>Author:</span>
          <span className='book-card-details-info'>{book.authors}</span>
        </div>

        <div className='book-card-detail'>
          <span className='book-card-details-title'>Price:</span>
          <span className='book-card-details-info'>
            {amount !== undefined
              ? amount.toLocaleString(undefined, {
                  style: 'currency',
                  currency: currencyCode,
                })
              : 'N/A'}
          </span>
        </div>
      </div>
    </article>
  )
}

export function BookPreview({ book }) {
  if (!book || !book.listPrice) {
    return null
  }

  const currencyCode = book.listPrice.currencyCode || 'USD'
  const amount = book.listPrice.amount

  return (
    <article>
      <div className='book-card-select-book'>
        <div className='book-card-title'>{book.title}</div>
        <img src={book.thumbnail} className='book-card-thumbnail' />
      </div>

      <div className='book-card-details'>
        <div className='book-card-detail'>
          <span className='book-card-details-title'>Author:</span>
          <span className='book-card-details-info'>{book.authors}</span>
        </div>

        <div className='book-card-detail'>
          <span className='book-card-details-title'>Price:</span>
          <span className='book-card-details-info'>
            {amount !== undefined
              ? amount.toLocaleString(undefined, {
                  style: 'currency',
                  currency: currencyCode,
                })
              : 'N/A'}
          </span>
        </div>
      </div>
    </article>
  )
}

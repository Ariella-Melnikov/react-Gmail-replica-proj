const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    // switch (target.type) {
    //   case 'number':
    //   case 'range':
    //     value = +value
    //     break
    switch (target.type) {
        case 'checkbox':
          value = target.checked;
          break;

      default:
        break
    }
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }



  return (
    <div className='mail-filter'>
      <input
        type='text'
        placeholder='Search...'
        value={filterBy.txt || ''}
        onChange={(e) => handleChange('txt', e.target.value)}
      />
      <label>
        <input
          type='checkbox'
          checked={filterBy.isRead || false}
          onChange={(e) => handleChange('isRead', e.target.checked)}
        />
        Read
      </label>
      <label>
        <input
          type='checkbox'
          checked={filterBy.isStared || false}
          onChange={(e) => handleChange('isStared', e.target.checked)}
        />
        Starred
      </label>
      <select value={filterBy.status || ''} onChange={(e) => handleChange('status', e.target.value)}>
        <option value=''>All</option>
        <option value='inbox'>Inbox</option>
        <option value='sent'>Sent</option>
        <option value='trash'>Trash</option>
        <option value='draft'>Draft</option>
      </select>
    </div>
  )
}

const { useState, useEffect } = React
import { TIME_RANGES } from '../services/email.service.js'
const FILTERS = Object.freeze({
  TEXT: 'text',
  ISREAD: 'is_read',
  SENT_AT: 'sent_at',
})
export function MailFilter({ filterBy, onChangeFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  useEffect(() => {
    onChangeFilter(filterByToEdit)
  }, [filterByToEdit])

  useEffect(() => {
    setFilterByToEdit(filterByToEdit)
  }, [filterBy])

  function handleChange(type, target) {
    switch (type) {
      case FILTERS.TEXT:
        filterByToEdit.txt = target
        setFilterByToEdit(filterByToEdit)
        onChangeFilter(filterByToEdit)
        break
      case FILTERS.ISREAD:
        filterByToEdit.isRead = target
        setFilterByToEdit(filterByToEdit)
        onChangeFilter(filterByToEdit)
        break
      case FILTERS.SENT_AT:
        filterByToEdit.sent_at = target
        setFilterByToEdit(filterByToEdit)
        onChangeFilter(filterByToEdit)
        break
      default:
        break
    }
  }

  return (
    <div className='mail-filter'>
      <input
        type='text'
        placeholder='Search...'
        value={filterBy.txt || ''}
        onChange={(e) => handleChange(FILTERS.TEXT, e.target.value)}
      />
      <label>
        <input
          type='checkbox'
          checked={filterBy.isRead || false}
          onChange={(e) => handleChange(FILTERS.ISREAD, e.target.checked)}
        />
        Read
      </label>
      <select value={filterBy.sent_at || ''} onChange={(e) => handleChange(FILTERS.SENT_AT, e.target.value)}>
        <option value={TIME_RANGES.ANY_TIME}>Any Time</option>
        <option value={TIME_RANGES.WEEK_AGO}>1 Weak Ago</option>
        <option value={TIME_RANGES.MONTH_AGO}>1 Month Ago</option>
        <option value={TIME_RANGES.SIX_MONTHS_AGO}>6 Month Ago</option>
        <option value={TIME_RANGES.YEAR_AGO}>1 Year Ago</option>
        <option value={TIME_RANGES.OVER_A_YEAR}>Over 1 Year</option>
      </select>
    </div>
  )
}

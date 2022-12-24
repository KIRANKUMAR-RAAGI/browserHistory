import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="conatainer">
      <div className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="domain-url">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-icon"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory

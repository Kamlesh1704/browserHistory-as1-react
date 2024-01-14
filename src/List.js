import './List.css'

const List = props => {
  const {listDetails, deletefunc} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listDetails
  const deletelist = () => {
    deletefunc(id)
  }
  return (
    <li className="li">
      <div className="text">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="a">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={deletelist}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}
export default List

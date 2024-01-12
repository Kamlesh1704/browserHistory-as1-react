import './List.css'

const List = props => {
  const {listDetails, deletefunc} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listDetails
  const deletelist = () => {
    deletefunc(id)
  }
  return (
    <li className="li">
      <div className="">
        <p className="">{timeAccessed}</p>
        <img src={logoUrl} className="" alt="domain logo" />
        <p className="">{title}</p>
        <a href={domainUrl} className="">
          {domainUrl}
        </a>
      </div>
      <button className="" data-testid="delete" onClick={deletelist}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className=""
        />
      </button>
    </li>
  )
}
export default List

import './index.css'

const Tag = props => {
  const {tagDetails} = props
  const {name} = tagDetails

  return (
    <button type="button" className="tag-container">
      <p className="tag-name">{name}</p>
    </button>
  )
}

export default Tag

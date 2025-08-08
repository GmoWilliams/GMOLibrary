import './Molecules.css'
import {genreList} from '../atoms/genresList'

const GenreOptions = ({onSelectGenre}: any) => {
  return (
    <div className='genre-options-container'>
      <ul className="genre-options-list">
        {genreList.map(item => (
          <li key={item.value}>
            <button
              className="genre-options-link"
              onClick={() => onSelectGenre(item)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreOptions
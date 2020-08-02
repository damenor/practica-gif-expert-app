import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faEye, faShare } from '@fortawesome/free-solid-svg-icons'

export const PageGridItem = ({ id, title, url }) => {
  title = title.trim()
  return (
    <div className="page-grid-item animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      {
        title &&
          <div className="page-grid-item__container">
            {/* <p>{ title }</p> */}
            {/* <div className="page-grid-item__buttons">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faEye} />
              <FontAwesomeIcon icon={faShare} />
            </div> */}
          </div>
      }
    </div>
  )
}

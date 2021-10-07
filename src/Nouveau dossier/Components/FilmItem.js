import React from 'react'

export default function FilmItem({starRating,descrp,title,imgUrl}) {
  
    return (
       
          <div className="card mb-3 p-2 m-2" style={{ maxWidth: 540 }}>
                  <div className="row g-0 h-100">
             <div className="col-md-4">
                      <img
                        src={imgUrl}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text ">{descrp}</p>
                        <span className="card-rating">{starRating}/5</span>
                        <button
                          type="button"
                          className="btn btn-outline-danger float-end"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-play"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
                          </svg>
                          Play
                        </button>
                      </div>
                    </div>
                    </div>
                    </div>
    
    )
}


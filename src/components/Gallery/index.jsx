import { useState } from "react"
import './index.scss'
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
const Gallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)


return (
  <div className="photos">
    
    <div className="wording">
    <h3>Pick your part now</h3>
    <h2>Quick and easy selection</h2>
    </div>
    <div className='galleryWrap'>
        {
          galleryImages.map((slide, index) => {
            return(
              <Link to ={{
                pathname: "/Shop/" + slide.name,
              }}
              >
              <div
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <div className= "nameForPart">
                <p className="title">{slide.name}</p>
                {/* <p className="Text">{slide.text}</p> */}
                </div>
                  <div className ="image" >
                    <img src={slide.img} alt='' />
                  </div>
              </div>
              </Link>
            )
          })
          
        }
      </div>
  </div>
)}

export default Gallery
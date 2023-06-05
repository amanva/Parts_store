import { useState } from "react"
import './index.scss'

const Gallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

const parts = ["Rims", "engine"]

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
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
                <div className= "nameForPart">
                  <p className="title">{slide.name}</p>
                  <p className="Text">This part is the engine</p>
                  
                </div>
              </div>
            )
          })
          
        }
      </div>
  </div>
)}

export default Gallery
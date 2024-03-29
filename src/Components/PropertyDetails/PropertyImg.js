import React,{useState} from 'react'

const PropertyImg = ({images}) => {
const [isModalOpen,setIsModalOpen]=useState(false);
const handleShowAllPhotos=()=>{
setIsModalOpen(true);

}
const handleCloseModal=()=>{

    setIsModalOpen(false);
}

  return (
   <>
   <div className='property-img-container'>
    {/* creating the first image */}
<div className='img-item first-image'>
   <img className='images' src={images[0].url} alt='property-1'/>

</div>
{/* remaining images */}
{/* iteration from images array */}
{images.slice(1,5).map((image,index)=>(

    <div key={index} className='img-item'>
<img 
className='images'
src={image.url}

alt={`property-${index + 2}`}/>
    </div>
))}

   </div>
   
   </>
  )
}

export default PropertyImg;

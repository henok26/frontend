import React ,{useState} from 'react'

const Filter = () => {
//State for controlling modal visibility
    const [isModalOpen,setIsModalOpen]=useState(false);
    //state for controlling selected filter
    const[selectedFilters,setSelectedFilters]=useState({})
  
//function to handle opening the modal /popupWindow
const handleShowAllPhotos=()=>{
    setIsModalOpen(true);
};

  //function to handle openning the modal
  const  handleCloseModal=()=>{

  }
  //function to handle changing filters
  const handleFilterChange=()=>{
    // setSelectedFilters(prevFilters)=>({})

  }
    return (
    <>
<span className="material-symbols-outlined">
tune
</span>

</>
  )
}

export default Filter
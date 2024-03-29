import React ,{useEffect, useState} from 'react'
import FilterModal from './FilterModal';
import { UseDispatch, useDispatch } from 'react-redux';
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';
const Filter = () => {
//State for controlling modal visibility
    const [isModalOpen,setIsModalOpen]=useState(false);

    //state for controlling selected filter
    const[selectedFilters,setSelectedFilters]=useState({});
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(propertyAction.updateSearchParams(selectedFilters));
dispatch(getAllProperties());

  },[selectedFilters,dispatch]);
 
//function to handle opening the modal /popupWindow
const handleOpenModal=()=>{
    setIsModalOpen(true);
};

  //function to handle closing the modal
  const  handleCloseModal=()=>{
    setIsModalOpen(false);

  }
  //function to handle changing filters
 

  const handleFilterChange = (filterName, value) => {
    // Update selected filter with new value
    setSelectedFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
};
    return (
    <>
    {/* //clickevent to  open the modal */}
<span class="material-symbols-outlined  filter" onClick={handleOpenModal}>
tune
</span>
{isModalOpen && (<FilterModal

selectedFilters={selectedFilters}
onFilterChange={handleFilterChange}
onClose={handleCloseModal}
/>)}

</>
  );
};

export default Filter
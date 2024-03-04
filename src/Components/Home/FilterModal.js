import React ,{useEffect,useState}from 'react'
import PropTypes from 'prop-types' //for prop types checking
import '../../CSS/FilterModal.css';
import 'react-input-range/lib/css/index.css'
import InputRange from 'react-input-range'

const FilterModal = (selectedFilters,onFilterChange,onClose) => {
    const [priceRange,setPriceRange]=useState({min:selectedFilters.priceRange?.min || 600,
    max:selectedFilters.priceRange?.max || 30000,
    })
    const [propertyType,setPropertyType]=useState(selectedFilters.propertyType||'') // default property

    const[roomType,setRoomType]=useState(selectedFilters.roomType || '')

    const[amenities,setAmenities]=useState(selectedFilters.amenities || [])

    //use effect hooks  to update states when selected filters prop changes
    useEffect(()=>{

        setPriceRange({min:selectedFilters.priceRange?.min || 600,
            max:selectedFilters.priceRange?.max || 30000,}



        );

    
    setPropertyType(selectedFilters.propertyType || '');
    setRoomType(selectedFilters.roomType || '');
    setAmenities(selectedFilters.amenities || [])}
    ) ;
  return (
    <div>FilterModal</div>
  )
}

export default FilterModal
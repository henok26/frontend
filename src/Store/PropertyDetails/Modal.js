import { useEffect } from "react"
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import '../../CSS/Modal.css';

const Modal = ({images,onClose}) => {
 
 useEffect(()=>{

    document.styleSheets.overflow='hidden';
 })
    return (
    <div>Modal</div>
  )
}

export default Modal
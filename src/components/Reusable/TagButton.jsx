import React from 'react'

const TagButton = ({label, onClick}) => {
  return (
    <button className='tag-button' onClick={onClick}>
        {label}
    </button>
  )
}

export default TagButton

import React from 'react'

const IconBox = (props) => {
  return (
      <article class="icon-box">
          <img src={props.img} alt={props.img_name} />
      </article>
  )
}

export default IconBox
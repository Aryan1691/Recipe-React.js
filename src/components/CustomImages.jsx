import React from 'react';
const CustomImages = ({images,pt}) => {
  return (
    <>
<div className='custom-image' key={pt} style={{paddingTop:pt}}>
<img src={images} alt='images'/>
</div>
    </>
  )
}

export default CustomImages
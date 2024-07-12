import React from 'react'
const Maps = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9947725052823!2d-74.04159423038429!3d4.773562936153266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85f0319d014f%3A0x7c54248c8dc33a9!2sCl.%20195a%20%2320-2%20a%2020-82%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1720800241514!5m2!1ses!2sco"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  )
}

export default Maps

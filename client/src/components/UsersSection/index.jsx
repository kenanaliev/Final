import React from 'react'
import "./index.scss"

const UsersSection = () => {
  return (
    <section id='users'>
        <div className="harley">
          <div className="photo">
            <img src="https://preview.colorlib.com/theme/wines/images/person_3.jpg" alt="" />
          </div>
          <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae tempora impedit repellendus esse aliquam, ut nemo quod omnis dolore debitis, quas consectetur molestiae eum necessitatibus repellat beatae iste rem, ex possimus mollitia! Est, ea laboriosam.</p>
          <p className='name'>-LEVI MORRIS</p>
        </div>
        <div className="levi">
        <div className="photo">
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
          </div>
          <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae tempora impedit repellendus esse aliquam, ut nemo quod omnis dolore debitis, quas consectetur molestiae eum necessitatibus repellat beatae iste rem, ex possimus mollitia! Est, ea laboriosam.</p>
          <p className='name'>-LEVI MORRIS</p>
        </div>
        <div className="allie">
        <div className="photo">
            <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
          </div>
          <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae tempora impedit repellendus esse aliquam, ut nemo quod omnis dolore debitis, quas consectetur molestiae eum necessitatibus repellat beatae iste rem, ex possimus mollitia! Est, ea laboriosam.</p>
          <p className='name'>-LEVI MORRIS</p>
        </div>
    </section>
  )
}

export default UsersSection
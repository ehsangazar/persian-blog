import React from 'react'
import { Link } from 'gatsby'

const SpecialMessage = () => {
  return (
    <div className="special">
      <div className="alert alert-info widthAll">
        سری به 
        <span className="speacial-code">
         <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC-NKQJ0bsHTXS_PzYCSvVUQ">
            ِGazar TV
         </a>
        </span>

         بزنید و Subscribe کنید و با کد  
        <span className="speacial-code">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC-NKQJ0bsHTXS_PzYCSvVUQ">
            GazarTV
          </a>
        </span>
        از تخفیف ۵۰ درصدی روی تمامی دوره‌ها استفاده کنید
      </div>
    </div>
  )
}

export default SpecialMessage

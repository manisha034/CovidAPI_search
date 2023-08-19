import React from 'react'
import './covid.css'
import pic from './geo-alt-fill.svg'

export default function Covidapi(Props) {
  return (
    // <div className='api'>
      
    //   <h6>{Props.loc}</h6>
    //   <h6>{Props.deaths}</h6>
    //   <h1>{Props.totalConfirmed}</h1>
     
    // </div>

    

    <div className="card"  style={{width: "18rem"}} alt="notimg">

        
      
        <div className="card-body">
          <h5 className="card-title"><img  src={pic} alt='logo'/>  {Props.state}</h5>
          <p className="card-text"><span>Total confirmed cases</span>  : {Props.totalConfirmed}</p>
          <p className="card-text"><span>Discharged</span>  :  {Props.discharged}</p>
          <p className="card-text"><span>Deaths occured</span>  : {Props.deaths}</p>
          
        </div>
    </div>



    
  )
}

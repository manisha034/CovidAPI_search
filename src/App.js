
import { useEffect, useState } from 'react';
import './App.css';
import Covidapi from './components/Covidapi';
// import UserSearch from './UserSearch';


function App() {

  const [regions, setRegion] = useState([])

  function fectchApiData(){
    fetch('https://api.rootnet.in/covid19-in/stats/latest').then((json)=>{
      return json.json()
    }).then((data)=>{
      console.log(data)
      setRegion(data.data.regional)
    })
  }

  useEffect(()=>{
    fectchApiData();
  },[])

  const [search, setSearch] = useState("");


  return (

    <div className='coviddata'>
      <h1>Covid-19 State wise Information</h1>
      
      <div className='userSearch'>
      <input 
            type="text"
            placeholder="Search State...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </div>

    
    <div className="App d-flex flex-wrap justify-content-around">

      
     {

            regions.filter((state)=>{
              if (search === "") {
                return state;
              } else if (state.loc.toLowerCase().includes(search.toLowerCase())) {
                return state;
              }
              return null;
            }).map((region)=>{
            return (<Covidapi 
            state={region.loc} 
            deaths={region.deaths}
            totalConfirmed={region.totalConfirmed}
            discharged={region.discharged}
            />
            )
        })

    }
    </div>
    </div>
  );
}

export default App;

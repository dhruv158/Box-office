import React, { useCallback, useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import { apiget } from '../misc/config';
const Home = () => {
    const [input,setInput]=useState("");
    const [results,setResults]=useState(null);
    const [searchOPtions,setSearchOptions]=useState('shows');
       
const isShowSearch=searchOPtions=='shows';
    const onInputChange=(ev)=>
    setInput(ev.target.value);
    
    const onkeydown=(ev)=>{
        if(ev.keyCode==13)
    onSearch();
    }
    const onRadioChange=(ev)=>{   setSearchOptions(ev.target.value)};
    console.log(searchOPtions)
    const renderResults=()=>{ 
       
        if(results && results.length==0){return <div>no result</div>};
    if(results && results.length>0) {return( results[0].show?(<ShowGrid data={results}/>):(<ActorGrid data={results}/>)
    
    )
    
    }
    return null;
    }
    const onSearch=()=>{
   // https://api.tvmaze.com/search/shows?q=${this.input}
    

   apiget(`/search/${searchOPtions}?q=${input}`).then(result=>{setResults(result)});
   
   
   
};


  return (
    
    <MainPageLayout><input type="text" placeholder='type something'  onChange={onInputChange} onKeyDown={onkeydown} value={input}/>
    <div><label htmlFor='shows-search'>shows
    <input id="shows-search" type="radio" value="shows" checked={isShowSearch} onChange={onRadioChange}/>    </label>
    
   < label htmlFor='actors-search'>actors
    <input id="actors-search" type="radio" value="people"  checked={!isShowSearch} onChange={onRadioChange}/>    </label>
    
    </div>
    
    <button type="button" onClick={onSearch}>Search </button>{renderResults()}
      </MainPageLayout>
  )
}

export default Home
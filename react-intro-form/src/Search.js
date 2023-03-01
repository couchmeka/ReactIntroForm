




function Search (props) { 

  
  
  return (
    
    <div>
 <label htmlFor="search"></label>
  <input 
   type="text"
   placeholder="Search here"
   onChange={props.handleChange}
   value={props.searchInput}/>
<button onClick={props.handleSearch}> Search</button>
   </div>
   
  )
  

} 

export default Search 


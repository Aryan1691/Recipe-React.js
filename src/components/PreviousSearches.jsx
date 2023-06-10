import React from 'react';
import CustomImages from './CustomImages';
import '../styles/RecipeCards.scss';

const PreviousSearches = ({ ITEMS }) => {
  const [search, updateSearch] = React.useState('NULL');
  const [data, updateData] = React.useState([]);

  React.useEffect(() => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c286bce62a7a4c45a0c26751eb650657&query=${search}&number=1`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        updateData(responseData.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div>
    
      <div className="previous-search section">
        <h2>Previous Searches</h2>
        <div className="previous-search-container">
          {ITEMS.map((item, index) => {
            return <div className="search-items" key={index}>{item}</div>;
          })}
        </div>
        <div className="search-box">
          <input
            type="text"
            className="input"
            id="Email"
            value={search}
            onChange={(e) => {
              updateSearch(e.target.value);
            }}
            name="Email"
            placeholder="recipe"
            autoComplete="off"
          />
          <input className="button--submit" defaultValue="Subscribe" type="submit" />
        </div>
       
         
{
  data.map((recpi,index)=>{
  return(    
    <div
    style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
      
    }}
    >
    
    <div className="recipe-card2" style={{
      borderRadius: "5px",
     overflow: "hidden",
     boxShadow: "0px 5px 12px rgba(0,0,0,0.2)",
     width:"420px",
     marginTop:"23px",
    //  display:"grid",
    //  gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))"
    display:"flex",
      flexDirection:"column",
    
  
    
    }} key={index}>
    <CustomImages images={recpi.image} pt={"65%"}/>    
        <div className="recipe-card-info2" style={{
           padding: "15px"
        }}>
          <p className='recipe-title2' style={{
              fontXize: "1.2em",
        fontWeight: "bold",
        marginBottom: ".5em",
        marginTop: ".25em",       
         overflow: "hidden"
          }}>{recpi.title}</p>
                <a className="view-btn2" 
                style={{
                  fontSize: "1.2em",
        fontWeight: "bold",
        color: "var(--primary-color)",
        marginTop: ".5em",
        display: "inline-block"
                }} href={recpi.spoonacularSourceUrl} rel='noReferrer'   target='_blank'>VIEW RECIPE</a>
        </div>
        </div>
        </div>
  )
})}
      </div>


    </div>
    
  );
};

export default PreviousSearches;

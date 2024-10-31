import DoPattiImg from '../../assets/images/series/dopatti.jpg';

const SeriesCard = () =>
{
    const seriesName="Do Patti";
    const age = 18;
    const rating = "8.2/10";
    const cast = "Kajol, Kriti Sanan";
    const genres = " Hindi-Language Movies, Crime Movies";
    const movieis = "Dark, Suspensefull";
    const summary = 
                "A police investigates crime involving twins. The movie is filled with love , suspense and thiller";

    const getSummary = () =>
    {
        return summary;
    }

    /**2nd way to display watchnow button as per age */
    let canWatch = "Not Available";
    if(age >= 18) canWatch = "Watch Now";
    /*
        const btntext= document.getElementById("btn-seriescard");
        if(age >= 18)
        {
            btntext.textContent ="Watch Now";
        }
        else{
            btntext.textContent ="Not Available";
        }
        <button id='btn-seriescard'>{btntext}</button> 
    */
    
  return (
    <div>
        <div id='div-series-img'>
             <img src={DoPattiImg}></img>
             <p>hello from series card</p>
             <h2>Name: {seriesName}</h2>
             <h3>Ratings:{rating}</h3>
             <p>Cast: {cast}</p>
             <p>Genres: {genres}</p>
             <p>This movie is: {movieis}</p>
             <p>Summary: {getSummary()}</p>
             {/*<button id='btn-seriescard'>{age >= 18? "Watch Now" : " Not Available"}</button>   */}
               <button id='btn-seriescard'>{canWatch}</button>
        </div>
    </div>
  )
}

export default SeriesCard;

export const SeriesCardFooter = ()=>
{
   return <p>Copyright @ sup.ibm</p>
}
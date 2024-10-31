import DoPattiImg from '../../assets/images/series/dopatti.jpg';
import seriesCardList from '../../api/seriescardlist.json';

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

    /**2nd way to display watchnow button as per age if not rendered as list */
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
             {/*<button id='btn-seriescard'>{age >= 18? "Watch Now" : " Not Available"}</button>  display as per condition if rendered as list example is below at line no 64 */}
               <button id='btn-seriescard'>{canWatch}</button>
        </div>
        <div>
            <ul>
                {
                    seriesCardList.map((currentElement) =>
                    {
                        return (
                            <li key={currentElement.id}>
                                <div id='div-series-img'>
                                    <img src={currentElement.img_url ==""? DoPattiImg:currentElement.img_url}></img>
                                    <h2>Name: {currentElement.name}</h2>
                                    <h3>Ratings:{currentElement.ratings}</h3>
                                    <p>Cast: {currentElement.cast}</p>
                                    <p>Genres: {currentElement.genres}</p>
                                    <p>This movie is: {currentElement.movieis}</p>
                                    <p>Summary: {currentElement.summary}</p>
                                    <button id='btn-seriescard'>{currentElement.age >= 18? "Watch Now" : " Not Available"}</button>
                                </div>
                            </li>
                        )                       
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default SeriesCard;

export const SeriesCardFooter = ()=>
{
   return <p>Copyright @ sup.ibm</p>
}
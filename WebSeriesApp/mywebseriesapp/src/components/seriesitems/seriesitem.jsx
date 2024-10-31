
export const SeriesItem = (props) =>
{
    return (
        <li key={props.curItem.id}>
            <div id='div-series-img'>
                <img src={props.curItem.img_url}></img>
                <h2>Name: {props.curItem.name}</h2>
                <h3>Ratings:{props.curItem.ratings}</h3>
                <p>Cast: {props.curItem.cast}</p>
                <p>Genres: {props.curItem.genres}</p>
                <p>This movie is: {props.curItem.movieis}</p>
                <p>Summary: {props.curItem.summary}</p>
                <button id='btn-seriescard'>{props.curItem.age >= 18? "Watch Now" : " Not Available"}</button>
            </div>
        </li>
    )  
}
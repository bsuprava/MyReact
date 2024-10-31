import seriesCardList from '../../api/seriescardlist.json';
import {SeriesItem} from '../seriesitems/seriesitem'

const SeriesItemList =() =>
{
    return(
        <div>
            {/**avoid multi line 
             * 
             * <ul>
                {
                    seriesCardList.map((curItem)=>
                    {
                        return(
                            <SeriesItem key={curItem.id} curItem={curItem}/>
                        );
                    }

                    )
                }
            </ul>

            Instead use single line for 1 line return statement as line no 28
             */}
            <ul>
                {
                 seriesCardList.map((curItem)=> (<SeriesItem key={curItem.id} curItem={curItem}/>))
                }
            </ul>
           {/**
            * can be written as "data" instead curItem as prop
            * seriesCardList.map((curItem)=> (<SeriesItem key={curItem.id} data={curItem}/>))
            * 
            * access in child component as below
            * props.data.id
            * 
            * if paasing data to child component parameter then access as below
            * const SeriesItem = ({}data}) =>
            * 
            * access as data.id
            */} 
        </div>
    )

}

export default SeriesItemList
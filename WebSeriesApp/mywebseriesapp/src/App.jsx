import './App.css'
import ProfileCards from './components/profiles/profilecardlist'
import SeriesCard, {SeriesCardFooter} from './components/seriescards/seriescard'
import SeriesItemList from './components/seriesitems/seriesitemlistdata'

function App() {

  return ( 
    <div className='seriesbody-container'>
      <div className='seriesbody-container-row'>
          <div className='profilecards-container'>
            <ProfileCards/>
          </div>
          <div className='.serieslist-container'>
              <h1>
                Hello World
              </h1>
              <SeriesCard/>
              <SeriesCardFooter/>
              <SeriesItemList/>
          </div>
      </div>      
    </div> 
   
  )
}

export default App

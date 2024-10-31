import './App.css'
import SeriesCard, {SeriesCardFooter} from './components/seriescards/seriescard'
import SeriesItemList from './components/seriesitems/seriesitemlistdata'

function App() {

  return (  
   <div>
      <h1>
        Hello World
      </h1>
      <SeriesCard/>
      <SeriesCardFooter/>
      <SeriesItemList/>
   </div>
  )
}

export default App

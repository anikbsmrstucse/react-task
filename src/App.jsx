import './App.css'
import Completed from './component/Completed/Completed'
import Doing from './component/Doing/Doing'
import Incomplete from './component/Incomplete/Incomplete'
import Todo from './component/ToDo/Todo'
import UnderReview from './component/UnderReview/UnderReview'

function App() {
  

  return (
    <>
      <div className='flex gap-5'>
        <Incomplete></Incomplete>
        <Todo></Todo>
        <Doing></Doing>
        <UnderReview></UnderReview>
        <Completed></Completed>
      </div>
    </>
  )
}

export default App

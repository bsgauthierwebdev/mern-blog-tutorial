import Sidebar from '../../Components/Sidebar/Sidebar'
import SinglePostComponent from '../../Components/SinglePostComponent/SinglePostComponent'
import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className="singlepost">
        {/* post */}
        <SinglePostComponent />
        <Sidebar />
    </div>
  )
}

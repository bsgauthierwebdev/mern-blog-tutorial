import './Post.css'

export default function Post() {
  return (
    <div className="post">
        <img 
            src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" 
            alt="Post Image" 
            className="postimage" 
        />
        <div className="postinfo">
            <div className="postcategories">
                <span className="postcategory">Music</span>
                <span className="postcategory">Life</span>
            </div>
            <span className="posttitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr />
            <span className="postdate">1 hour ago</span>
        </div>
        <p className="postdescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit iure fugiat enim quidem iusto iste accusamus esse rerum odit sed, modi minima corrupti ullam ut incidunt. Pariatur rem doloribus praesentium hic voluptate ex accusamus libero autem molestiae, quos placeat provident deserunt quia? Veritatis minima asperiores ut inventore quasi sit fugit voluptas nam magnam dicta, suscipit modi ipsam doloribus mollitia, possimus, cum quisquam? Quam sapiente nihil molestias tenetur, porro expedita velit. Eum ducimus quaerat, illo porro iste laboriosam, nisi maiores nam aspernatur, facilis sunt ipsum. Deserunt dolorum eveniet suscipit recusandae.
        </p>
    </div>
  )
}

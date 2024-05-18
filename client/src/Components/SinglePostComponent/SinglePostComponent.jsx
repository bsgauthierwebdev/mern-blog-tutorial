import './SinglePostComponent.css'

export default function SinglePostComponent() {
  return (
    <div className="singlepostcomponent">
        <div className="singlepostcomponentwrapper">
            <img 
                src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" 
                alt="Single Post Component" 
                className="singlepostcomponentimage" 
            />
            <h1 className="singlepostcomponenttitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nobis!
                <div className="singlepostcomponentedit">
                    <i className="singlepostcomponenticon fa-solid fa-pen-to-square"></i>
                    <i className="singlepostcomponenticon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlepostcomponentinfo">
                <span className = 'singlepostcomponentauthor'>
                    Author: <b>Brent Gauthier</b>
                </span>
                <span className = 'singlepostcomponentdate'>
                    1 hour ago
                </span>
            </div>
            <p className = 'singlepostcomponentdescription'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quis dolorum, rem doloribus earum harum sit voluptates! Vero doloribus aspernatur assumenda inventore quis, impedit modi sed officiis voluptatibus odio iure fuga et deleniti facilis. Repudiandae repellendus qui cumque nostrum omnis id at eos quas expedita delectus esse sit rerum, accusamus repellat, officia quisquam placeat officiis nesciunt voluptate excepturi? Possimus iure iste quasi iusto, quae inventore reprehenderit, consequuntur rerum amet accusamus excepturi adipisci vero dicta eos ullam quaerat soluta dolores! Delectus, expedita adipisci inventore sed velit voluptates error iure voluptatem rem, ratione vero fugiat distinctio ex, blanditiis laborum maiores nihil laboriosam quas impedit enim ipsum praesentium fugit quibusdam? Quam rem totam quis veniam ipsa, cupiditate veritatis dolorum. Repudiandae fugit incidunt quos exercitationem repellendus et odit unde nam enim amet laudantium ex autem dolores delectus, debitis aliquam ducimus, assumenda omnis magnam totam eaque rerum? Qui inventore et velit! Quod totam maxime voluptatum et esse officia accusantium, a numquam fugiat velit fuga modi nam labore exercitationem animi enim natus placeat veniam, ut optio quae nemo? Excepturi, ratione ut? Necessitatibus culpa quidem doloremque, ullam dignissimos aliquid tempora, quo iure cum odit pariatur voluptatibus quis, vitae at. Id ut excepturi repellat inventore maiores. Expedita, deserunt!
            </p>
        </div>
    </div>
  )
}

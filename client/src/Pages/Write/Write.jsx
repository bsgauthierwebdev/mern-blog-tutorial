import './Write.css'

export default function Write() {
  return (
    <div className="write">
        <img 
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg" 
            alt="post visage" 
            className = 'writeimage'
        />
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                    <i className="writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file" id = 'fileinput' style = {{display: 'none'}} />
                <input type="text" placeholder = 'Title' className = 'writeinput' autoFocus = {true} />
            </div>
            <div className="writeformgroup">
                <textarea 
                    placeholder = 'Tell your story...' 
                    type = 'text' 
                    className = 'writeinput writetext'
                >
                </textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}

import "./project.css"

const Project=({src,w3,name})=>{
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="p-img-wrapper">
                    <img src={src} alt="img" className="p-img" />
                    <div className="p-anchor">
                        <h4 className="p-name">{name}</h4>
                        <a href={w3} target="_blank" className="">
                                <button>Open</button>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Project

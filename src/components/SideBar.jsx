
export default function SideBar({data, handleToggalModal}) {
    return (
        <div className="sidebar">
            <div  className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data.date}</p>
                    <p>{data.explanation}</p>
                </div>
                <button onClick={handleToggalModal} >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
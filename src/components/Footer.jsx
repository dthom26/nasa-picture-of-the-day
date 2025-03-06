export default function Footer({handleToggalModal, data}) {
   
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggalModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
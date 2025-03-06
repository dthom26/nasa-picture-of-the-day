export default function Main({data}) {
    return(
        
            <div className="imageContainer">
                <img src={data.hdurl} alt={data.title} className="bgImage" />
            </div>
        
    )
}


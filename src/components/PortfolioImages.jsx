import imagesLinks from "./imagesLinks";


export default function PortfolioImages (props) {
    const filterImages = props.selected !== "All" ? imagesLinks.filter((e)=>{
     return props.selected === e.category
    }) : imagesLinks

    return  <div className={"images-container"}>
        {filterImages.map((e,i)=>{
            return <img src={e.img} key={i}/>
        })}
    </div>
}
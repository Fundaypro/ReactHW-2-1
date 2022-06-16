import {useState} from "react";
import Toolbar from "./Toolbar";
import PortfolioImages from "./PortfolioImages";
function Portfolio () {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selected, setSelected] = useState("All");
    const selectedCb = (filter) => {console.log(filter);}
    return <>
        <Toolbar selected={selected} setSelected={setSelected} filters={filters}/>
        <PortfolioImages selected={selected} filters={filters}/>
    </>
}
export default Portfolio
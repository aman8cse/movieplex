import react from "react";
import "../css/typeSec.css";

function typeSec() {
    const type = "Trending";
    const typeOptions = ["Today, This Week"];

    return(
        <div className="typeSec">
            <div className="type">{type}</div>
            <div className="typeOptions">{typeOptions}</div>
        </div>
    )
}

export default typeSec;
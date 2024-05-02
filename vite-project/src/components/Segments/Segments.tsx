import styles from "./Segments.module.css"
import { SegmentsProps } from "./Segments.props"
import {Fragment} from "react"
import {v4 as uuidv4} from "uuid"

const Segments: React.FC<SegmentsProps> = ({segments}) => {
    return(
         <div className={styles["flights"]}>
            {segments && segments.map(segment => 
        <Fragment key={uuidv4()}>  
        
             <div>{segment.destination} - {segment.origin}</div>
             <div>В пути</div>
            <div>{segment.stops.length > 0 ? segment.stops.length : "Без пересадок"}</div>
            <div>время прибытия</div>
            <div>duration</div>
            <div>airports</div></Fragment>
            
            )}
            
         
        </div>
    )
}
export default Segments
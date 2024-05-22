import { arrowDownLong, arrowUpLong, clock, barchart } from "../../assets/images";

const statsIcons = {
    change: clock,
    high: arrowUpLong,
    low: arrowDownLong,
    volume: barchart,
}

const Summary = ({title, profit, value}) => {
    return ( 
        <div className="w-[180px] pl-6 border-l border-divider flex-shrink-0">
            <div className="flex text-xs items-center mb-3 text-text-col-1 gap-x-1">
                <img src={statsIcons[title]} alt="" />
                <span>24h {title}</span>
            </div>
            <p className={`text-sm ${profit ? 'text-profit' : "text-white"}`}>{value}</p>
        </div>
     );
}
 
export default Summary;
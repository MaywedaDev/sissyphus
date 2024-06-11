import Card from "../card";
import tradingview from "../../assets/images/others/Tradingview.svg"

const Chart = () => {
    return ( 
        <Card full>
            <div className="w-full">
                <img src={tradingview} className="h-full object-scale-down" alt="" />
            </div>
        </Card>
     );
}
 
export default Chart;
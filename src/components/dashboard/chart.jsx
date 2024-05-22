import Card from "../card";
import tradingview from "../../assets/images/others/Tradingview.svg"

const Chart = () => {
    return ( 
        <Card full>
            <div className="w-full ">
                <img src={tradingview} className="w-full object-cover" alt="" />
            </div>
        </Card>
     );
}
 
export default Chart;
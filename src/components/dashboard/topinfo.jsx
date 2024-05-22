import {btcrate, arrowRight} from "../../assets/images";
import Summary from "./infosummary";

const TopInfo = () => {
    return ( 
        <div className="w-full bg-paper border border-border-2 rounded-lg px-3 py-5 flex items-center">
            <div className="flex items-center gap-3 mr-5">
                <img src={btcrate} alt="" />
                <img className="rotate-90" src={arrowRight} alt="" />
                <span className="text-lg text-profit">$20,634</span>
            </div>
            <div className="flex items-center">
                <Summary title="change" profit value="520.80 +1.25%"/>
                <Summary title="high" value="520.80 +1.25%"/>
                <Summary title="low" value="520.80 +1.25%"/>
                <Summary title="volume" value="75.655.26"/>
            </div>
        </div>
     );
}
 
export default TopInfo;
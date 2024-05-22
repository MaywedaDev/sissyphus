import Chart from "./chart";
import ExchangeRate from "./exchangerate";
import TopInfo from "./topinfo";

const Dashboard = () => {
    return ( <div className="flex flex-col gap-2 p-2">
        <TopInfo />
        <div className="w-full flex gap-2">
            <Chart />
            <ExchangeRate />
        </div>
    </div> );
}
 
export default Dashboard;
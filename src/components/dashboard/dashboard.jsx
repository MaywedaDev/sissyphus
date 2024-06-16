import Chart from "./chart";
import ExchangeRate from "./exchangerate";
import Stats from "./stats";
import TopInfo from "./topinfo";

const Dashboard = () => {
    return ( <div className="flex flex-col gap-2 p-2">
        <TopInfo />
        <div className="w-full grid gap-2 grid-cols-[1fr_repeat(2,_250px)]">
            <Chart />
            <ExchangeRate />
            <Stats />
        </div>
    </div> );
}
 
export default Dashboard;
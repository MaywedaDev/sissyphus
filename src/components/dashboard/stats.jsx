import TabsCard from "../tabscard";

const Stats = () => {
    return ( <div className="col-span-2">
        <TabsCard full buttons={["Open Orders", "Positions", "Order History", "Trade History"]}>
            <div className="flex flex-col w-full justify-center text-center items-center h-[300px]">
                <h2 className="text-2xl">No Open Orders</h2>
                <p className="max-w-[378px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.</p>
            </div>
        </TabsCard>
    </div> );
}
 
export default Stats;
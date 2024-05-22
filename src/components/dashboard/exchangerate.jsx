import { greyArrowDown, stack, stack2, stack3 } from "../../assets/images";
import TabsCard from "../tabscard";

const ExchangeRate = () => {
    return ( 
        <TabsCard>
            <div className="w-[250px] px-2 py-3 flex flex-col gap-3">
                <div className="flex gap-2">
                    <button className="w-[32px] h-[32px] grid place-content-center rounded bg-btn-active">
                        <img src={stack} alt="" />
                    </button>
                    <button className="w-[32px] h-[32px] grid place-content-center rounded">
                        <img src={stack2} alt="" />
                    </button>
                    <button className="w-[32px] h-[32px] grid place-content-center rounded">
                        <img src={stack3} alt="" />
                    </button>
                    <div className="p-2 rounded bg-btn-active flex gap-6 items-center text-white text-xs ml-auto"><span>10</span><img src={greyArrowDown} alt="" /></div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="text-text-col-1">
                        <h3 className="text-xs">Price</h3>
                        <h3 className="text-[9px]">(USDT)</h3>
                    </div>
                    <div className="text-text-col-1">
                        <h3 className="text-xs ">Amounts</h3>
                        <h3 className="text-[9px]">(BTC)</h3>
                    </div>
                    <h3 className="text-text-col-1 text-xs">Total</h3>
                </div>
            </div>
        </TabsCard>
     );
}
 
export default ExchangeRate;
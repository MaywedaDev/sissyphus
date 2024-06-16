import { greyArrowDown, stack, stack2, stack3, warning } from "../../assets/images";
import ArrowUpLong from "../icons/navigation/arrowUpLong";
import TextField from "../inputs/textfield";
import TabsCard from "../tabscard";

const ExchangeRate = () => {
    return ( 
        <>
            <TabsCard buttons={["Order", "Recent Trades"]}>
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
                        <div className="p-2 rounded bg-btn-active flex gap-6 items-center text-xs ml-auto"><span>10</span><img src={greyArrowDown} alt="" /></div>
                    </div>
                    <table>
                        <thead>
                            <tr className="text-text-col-1">
                                <th className="py-2">
                                    <h3 className="text-xs">Price</h3>
                                    <h3 className="text-[9px]">(USDT)</h3>
                                </th>
                                <th className="py-2">
                                    <h3 className="text-xs ">Amounts</h3>
                                    <h3 className="text-[9px]">(BTC)</h3>
                                </th>
                                <th className="py-2">
                                    <h3 className="text-text-col-1 text-xs text-right">Total</h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-medium">
                            <tr>
                                <td className="py-2 text-loss">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-loss">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-loss">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-loss">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-loss">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="py-2 flex justify-center items-center gap-3">
                        <h3 className="text-profit">36,641.20</h3>
                        <div className="text-profit"><ArrowUpLong /></div>
                        <h3>36,641.20</h3>
                    </div>
                    <table>
                        <tbody className="text-xs font-medium">
                            <tr>
                                <td className="py-2 text-profit">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-profit">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-profit">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-profit">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-profit">36920.12</td>
                                <td className="py-2">0.758965</td>
                                <td className="py-2">28,020.98</td>
                            </tr>
                        </tbody>
                    </table>
            </TabsCard>
            <TabsCard buttons={["Buy", "Sell"]}>
                <div className="flex items-center justify-between text-sm">
                    <button className="px-4 py-1 rounded-2xl bg-btn-active">Limit</button>
                    <button className="rounded-2xl text-[#777E90]">Market</button>
                    <button className="rounded-2xl text-[#777E90]">Stop-Limit</button>
                </div>
                <div className="space-y-4">
                    <TextField label="Limit Price"/>
                    <TextField label="Amount"/>
                    <TextField label="Type" isSelect />
                </div>
                <div className="text-xs text-text-col-1 w-full space-y-3">
                    <div className="flex gap-1 items-center">
                        <input type="checkbox" name="" id="" />
                        <label>Post Only</label>
                        <img src={warning} alt="" />
                    </div>
                    <div className="flex justify-between w-full">
                        <span>Total</span>
                        <span>0.00</span>
                    </div>
                    <button className="p-3 rounded-lg bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D] text-white text-sm w-full">Buy BTC</button>
                    <div className="w-full h-[1px] bg-[#394047]"></div>
                    <div className="flex w-full justify-between items-start">
                        <div className="flex flex-col">
                            <span>Total account value</span>
                            <span className="text-white text-sm">0.00</span>
                        </div>
                        <button className="flex items-center gap-1"><span>NGN</span> <img src={greyArrowDown} alt="" /></button>
                    </div>
                    <div className="flex w-full justify-between items-start">
                        <div className="flex flex-col">
                            <span>Open Orders</span>
                            <span className="text-white text-sm">0.00</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Available</span>
                            <span className="text-white text-sm">0.00</span>
                        </div>
                    </div>
                    <button className="py-3 px-4 rounded-lg bg-[#2764FF] text-white text-sm !mt-10">Deposit</button>
                </div>
            </TabsCard>
        </>
     );
}
 
export default ExchangeRate;
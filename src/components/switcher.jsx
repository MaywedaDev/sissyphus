const Switcher = () => {
    return ( 
        <div className="w-full flex border-2 border-[rgba(0,0,0,0.16)] bg-[rgba(0,0,0,0.16)] rounded-[10px]">
            <button className="w-full rounded-lg p-2 bg-btn-tab-2 text-white text-xs">Order Book</button>
            <button className="w-full rounded-lg p-2 text-text-col-1 text-xs">Recent trades</button>
        </div>
     );
}
 
export default Switcher;
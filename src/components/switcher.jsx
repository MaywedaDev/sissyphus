import PropTypes from "prop-types"
const Switcher = ({buttons}) => {
    return ( 
        <div style={{ maxWidth: 125 * buttons.length }}  className="w-full flex border-2 border-[rgba(0,0,0,0.16)] bg-[rgba(0,0,0,0.16)] rounded-[10px]">
            {buttons.map((el, i) => <>
                <button key={i}  className={`w-full rounded-lg p-2 ${i == 0 && 'bg-btn-tab-2'} text-white text-xs relative`}>
                    {buttons.length > 2 && i > 1 && <div className="w-px bg-[rgba(255,_255,_255,_0.25)] absolute left-0 top-2 bottom-2"></div>}
                    {el}
                </button>
            </>)}
            
            
        </div>
     );
}
 
export default Switcher;

Switcher.propTypes = {
    buttons: PropTypes.array
}
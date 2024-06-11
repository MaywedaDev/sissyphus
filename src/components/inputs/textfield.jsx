import { warning, arrowRight } from "../../assets/images";
import PropTypes from "prop-types"
const TextField = ({label, isSelect}) => {
    return ( <div className="w-full border border-border-3 rounded-lg p-3 flex gap-2 text-sm text-text-col-1 items-center">
        <div className="flex items-center gap-1">
            <span className="whitespace-nowrap">{label}</span>
            <img className="my-auto" src={warning} alt="" />
        </div>
        <div className="flex w-full justify-end items-center">{isSelect ? <><span className="whitespace-nowrap text-xs">Good till cancelled</span> <img width={18} className="rotate-90" src={arrowRight} /></> : <><input defaultValue={0.00} className="bg-transparent focus:outline-none text-right w-full" step={0.01} type="number" />
        <span>USD</span></> }</div>
    </div> );
}
 
export default TextField;

TextField.propTypes = {
    label: PropTypes.string,
    isSelect: PropTypes.bool,
}


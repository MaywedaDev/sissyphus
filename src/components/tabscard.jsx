import Card from "./card";
import PropTypes from 'prop-types'
import Switcher from "./switcher";

const TabsCard = ({children, buttons, full}) => {
    return ( 
        <Card>
            <div className={`px-2 py-3 ${!full && 'w-[250px]'}`}>
                <Switcher buttons={buttons} />
                <div className="w-full px-2 py-3 flex flex-col gap-3 text-white">
                    {children}
                </div>
            </div>
        </Card>
     );
}
 
export default TabsCard;

TabsCard.propTypes = {
    children: PropTypes.node,
    buttons: PropTypes.array,
    full: PropTypes.bool
}
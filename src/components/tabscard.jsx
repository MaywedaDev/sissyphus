import Card from "./card";
import PropTypes from 'prop-types'
import Switcher from "./switcher";

const TabsCard = ({children}) => {
    return ( 
        <Card>
            <div className="px-2 py-3">
                <Switcher />
                {children}
            </div>
        </Card>
     );
}
 
export default TabsCard;

TabsCard.propTypes = {
    children: PropTypes.node,
}
import PropTypes from 'prop-types';

const Card = ({children, full}) => {
    return ( 
        <div className={`bg-paper border border-border-2 rounded-lg ${full && 'w-full'}`}>
            {children}
        </div>
     );
}

 
export default Card;

Card.propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool
}
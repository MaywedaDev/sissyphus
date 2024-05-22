import PropTypes from 'prop-types';

const Card = ({children, full}) => {
    return ( 
        <div className={`bg-paper border border-border-2 rounded-lg overflow-hidden min-w-fit ${full && 'w-full'}`}>
            {children}
        </div>
     );
}

 
export default Card;

Card.propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool
}
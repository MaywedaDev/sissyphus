import arrowRight from "../../assets/images/icons/u_angle-right.svg"

const Profile = () => {
    return ( 
        <div className="px-3 py-2 bg-btn-tab rounded-lg flex gap-2 items-center ">
            <span className="text-text-col-1 whitespace-nowrap">Olakunle Teslim</span>
            <img src={arrowRight} alt="" />
        </div>
     );
}
 
export default Profile;
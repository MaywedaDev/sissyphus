import arrowRight from "../../assets/images/icons/u_angle-right.svg"
import profilepic from "../../assets/images/avatars/81.svg"

const Profile = () => {
    return ( 
        <div className="px-3 py-2 bg-btn-tab rounded-lg flex gap-2 items-center max-w-[180px]">
            <img src={profilepic} alt="" />
            <p className="text-text-col-1 whitespace-nowrap text-ellipsis flex-shrink text-sm">Olakunle Teslim</p>
            <img src={arrowRight} alt="" />
        </div>
     );
}
 
export default Profile;
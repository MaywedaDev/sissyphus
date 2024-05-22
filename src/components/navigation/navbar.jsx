import Logo from "./logo";
import globe from "../../assets/images/icons/Globe.svg"
import signout from "../../assets/images/icons/SignOut.svg"
import NavProfile from "./navprofile";


const Nav = () => {
    return ( 
        <div className="w-full px-3 py-4 border-b border-divider flex items-center justify-between">
            <div className="flex items-center">
                <Logo />
                <div className="min-h-full w-[1px] h-8 ml-8 mr-12 bg-divider"></div>
                <ul className="text-sm font-medium flex gap-x-10">
                    <li className="text-white">Exchange</li>
                    <li className="text-text-col-1">Wallets</li>
                    <li className="text-text-col-1">Roqqu Hub</li>
                </ul>
            </div>
            <div className="flex items-center gap-x-6 pr-2">
                <NavProfile />
                <img src={globe} alt="" />
                <img src={signout} alt="" />
            </div>
        </div>
     );
}
 
export default Nav;
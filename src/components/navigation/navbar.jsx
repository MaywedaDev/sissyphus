import Logo from "./logo";
import NavProfile from "./navprofile";


const Nav = () => {
    return ( 
        <div className="w-full px-3 py-4 border border-red-200 flex items-center justify-between">
            <div className="flex items-center w-full">
                <Logo />
                <div className="min-h-full w-[1px] h-8 ml-8 mr-12 bg-divider"></div>
                <ul className="text-sm font-medium flex gap-x-10">
                    <li className="text-white">Exchange</li>
                    <li className="text-text-col-1">Wallets</li>
                    <li className="text-text-col-1">Roqqu Hub</li>
                </ul>
            </div>
            <div>
                <NavProfile />
            </div>
        </div>
     );
}
 
export default Nav;
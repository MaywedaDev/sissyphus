import Nav from "../components/navigation/navbar";
import Dashboard from "../components/dashboard/dashboard";

const PageLayout = () => {
    return ( 
        <div className="min-h-screen w-full bg-primary overflow-x-hidden">
            <Nav />
            <Dashboard />
        </div>
     );
}
 
export default PageLayout;
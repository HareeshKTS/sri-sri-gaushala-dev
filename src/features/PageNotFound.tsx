import {  useNavigate } from "react-router";
const PageNotFound = ({ route_name}: { route_name:string}) => {
    const navigate = useNavigate();

    
    return (
        <div className="p-2 px-5 h-screen">
            <div className="h-full flex flex-col items-center justify-center bg-white">
                <p className="mt-2 text-lg">
                    Ooops......! page not found .
                </p>

                <button
                    onClick={() => navigate?.(route_name)}
                    className="mt-4 px-4 py-1 bg-green-theme text-white cursor-pointer"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};
export default PageNotFound;
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="w-full h-10 flex bg-neutral-50 items-center justify-center space-x-5">
            <Link to="/auth">Sign In</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}
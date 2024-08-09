import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div>
            <Link to="/auth">Sign In</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}
import './header.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
export function Header(){
    
    const isloggedin = useSelector(state=>state.BlogReducer.isloggedin);
    console.log("isloggedin",isloggedin);
    
    useEffect(()=>{
        console.log("hello");
        console.log("isloggedin",isloggedin);
    },[])
    return(
        <div className="head1">
        <div className='logo'>
        <img className="logo1"src="https://logos-download.com/wp-content/uploads/2016/05/Deutsche_Welle_logo.png" alt="not loaded" width="100%" height="60px"/>
        </div>
        <div className="name">Dwane & White</div>
        {isloggedin?<Link to= '/signup'>
        <div className="login"><i className="fa">&#xf234;</i></div>
        </Link>:<div className="login"><i className="fa">&#xf234;</i></div>}
        
        <Link to='/'>
        <div className="logout"><a  target="iframe_a"><i class="fa fa-sign-out" ></i></a></div>
        </Link>
        </div>
    )
}

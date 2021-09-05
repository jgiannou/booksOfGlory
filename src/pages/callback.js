import React from "react"
import { Link } from "gatsby"
import { logout } from "../utils/auth"
import SearchBar from "../components/searchbar"

const Callback = () => {
return(
<>
<p>Callback</p>
<nav>
    <Link to="/">Home</Link>{" "}
    <Link to="/account/">My Account</Link>{" "}
   
    <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
       
</nav>
<div>  <SearchBar /> </div>
</>
)}

export default Callback

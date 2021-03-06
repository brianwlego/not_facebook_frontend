import React from 'react'
import '../Css/Header.css'
import { Link, withRouter } from 'react-router-dom'
import SearchForm from '../Components/SearchForm'
import img from "../Components/blank-profile-pic.png"


function Header(props) {

    const clickHandler = () => {
        localStorage.setItem("userId", props.user.id)
    }

    const chooseImage = () => {
        return props.user.img_url ?
            <img id="profile-button" alt="Alt" src={props.user.img_url} onClick={clickHandler} /> :
            <img id="profile-button" alt="Default Img" src={img} onClick={clickHandler} />
    }
    return (
        <div id="header">
            <div id="header-left">
                <Link to={'/home'}><button id="home-button">! fcebook</button></Link>
            </div>
            <div id="header-center">
                <SearchForm formClickHandler={props.formClickHandler} />
            </div>
            < div id="header-right">

                <div id="closer-together">
                    <a href={`/profile/${props.user.id}`}><p id="user-name">{props.user.first_name} </p></a>
                    <a href={`/profile/${props.user.id}`}>{chooseImage()}</a>
                </div>
                <button id="logout-button" onClick={props.appLogout}>Log Out</button>

            </div>
        </div>
    )
    //<img id="profile-button" onClick={clickHandler} alt="Alt" src={require("../Components/blank-profile-pic.png")} />
}

export default withRouter(Header)
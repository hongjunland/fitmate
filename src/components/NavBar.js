import './NavBar.scss';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div>
                <nav id="nav" className="navbar navbar-expand-md" style={{padding:"25px"}}>
                    <div className="container-fluid p-0 justify-content-center" style={{height:"6em"}}>
                        <div className="row" style={{width:"100%"}}>
                            {/*// <!-- 로고 중앙 정렬, 누르면 홈 페이지로 가도록 -->*/}
                            <div id="mainbar" className="col-12 justify-content-center">
                                <div id="logo">
                                    <Link to="/" className="navbar-brand" style={{fontSize:"130%"}}>
                                        Fitmate
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-end">
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">
                                            Sign up
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link">
                                            Sign in
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*// <!-- 아래는 로그인 후 보여지는 것 -->*/}
                            {/*// <!-- <div>*/}
                            {/*//   <ul class="navbar-nav me-auto mb-2 mb-md-0 justify-content-end">*/}
                            {/*//     <li class="nav-item">*/}
                            {/*//       <a class="nav-link"><router-link to="/signout">Sign out</router-link></a>*/}
                            {/*//     </li>*/}
                            {/*//     <li class="nav-item">*/}
                            {/*//       <a class="nav-link"><router-link to="/mypage">My Page</router-link></a>*/}
                            {/*//     </li>*/}
                            {/*//   </ul>*/}
                            {/*// </div> -->*/}
                            {/*// <!-- 언더라인 정렬, 간격은 추후 논의할 것 -->*/}
                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/stylist" className="mx-4">
                                           Stylist
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/stylebook" className="mx-4">
                                            Style book
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/qna" className="mx-4">
                                            QnA
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/notice" className="mx-4">
                                            Notice
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </nav>
                {/*// <!-- 로그인하면 따로 보여줄 게 있다면? -->*/}
                {/*// <!-- <router-view @login="isLogin=true"/>  -->*/}
                <router-view></router-view>
            </div>
        </>
    )
}
export default NavBar;
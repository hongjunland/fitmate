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
                                    <a className="navbar-brand" style={{fontSize:"130%"}}>
                                        <Link to="/">Fitmate</Link>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-end">
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link">*/}
                                    {/*        <Link to="/Signup">Sign up</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link">*/}
                                    {/*        <Link to="/signin">Sign in</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
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
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="mx-4">*/}
                                    {/*        <Link to="/stylist">Stylist</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="mx-4">*/}
                                    {/*        <Link to="/stylebook">Style book</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="mx-4">*/}
                                    {/*        <Link to="/qna">QnA</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="mx-4">*/}
                                    {/*        <Link to="/notice">Notice</Link>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
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
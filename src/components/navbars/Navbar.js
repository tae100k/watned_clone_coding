import './Navbar.css';

function Navbar() {
  return (
    <div className="navBar" role="presentation" style={{position: "fixed", paddingRight: "initial"}} >
    <div className="mainBar">
      <nav className="mainBarNav">
        <div className ="mainBarNavTop">
          <div className="mainBarNavTopLogo">
            <button type="button" aria-label="jobCategoryMenuButton" className="mainBarHamburger">
              <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hambergurMenu" className="hamburgerMenu" style={{width:"17px",
                height:"14px", objectFit: "contain"}}></img>
            </button>
            <a href="/" className="mainBarLogo">
             <img src="https://www.wantedlab.com/img/logo.png" alt="wanted logo" className="logoImg" />
            </a>
            </div>
          <button id="gnbSignupBtn" className="xsSignUpButton">회원가입하기 </button>
        </div>
        <ul className ="menu">
          <li className="xsHomeButton xsOnly selectedNav"> 
            <a href="/">홈</a>
          </li>
          <li><a href="/">채용</a></li>
          <li><a href="/jobsfeed">이벤트</a></li>
          <li className="options"><a href="/salary">직군별 연봉</a></li>
          <li className="options"><a href="/cv">이력서</a></li>
          <li className="options">
            <a href="/community">
              커뮤니티
              <em>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <g fill="#3366FF">
                                    <text
                                      transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                      fill="#3366FF"
                                    >
                                      <tspan x="0" y="8" fill="#3366FF">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </em>
            </a>
          
          </li>
          <li className="options"><a href="/experts">프리랜서</a></li>
          <li className="options">
            <a href="/aiscore">
              AI 합격예측
              <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <g fill="#3366FF">
                                    <text
                                      transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                      fill="#3366FF"
                                    >
                                      <tspan x="0" y="8" fill="#3366FF">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
            </a>
          </li>
        </ul>
        <aside className="aside">
          <ul>
            <li>
              <button className="searchButton">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="searchBarsearchIcon"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"
                      fill="#333333"
                    ></path>
                  </svg>
              </button>
            </li>
            <li >
              <button className="signUpButton">
                회원가입/로그인
              </button>
            </li>
            <li className="forEmployers leftDivision">
              <a className="dashboardButton" href="/dashboard">기업 서비스</a>
            </li>
            <li className="AsideMenu">
              <button type="menu" className="menuButton">
                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="dot">
                  <defs>
                    <path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a"></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff">
                      <use href="#a"></use>
                    </mask>
                    <use fill="#333" href="#a"></use>
                    <g mask="url(#b)" fill="#333">
                      <path d="M0 0h18v18H0z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
          <div className="AsideMenu"></div>
        </aside>
      </nav>
    </div>
  </div>
  );
}

export default Navbar;

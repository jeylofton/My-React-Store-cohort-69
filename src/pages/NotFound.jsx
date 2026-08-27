import "./NotFound.css";
import { IconMoodPuzzled } from '@tabler/icons-react';

/*
 * Static visual recreation of the GitHub 404 page.
 * This is a styling exercise only - nothing here is wired up,
 * the sign in panel and the search box are just markup.
 */
function NotFound(){

    return(
        <div className="nf">

            {/* ---------- top navigation bar ---------- */}
            <header className="nf-header">
                <a className="nf-mark" href="#top" aria-label="GitHub">
                    <svg viewBox="0 0 16 16" width="32" height="32" aria-hidden="true">
                        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>

                <nav className="nf-nav">
                    <ul>
                        <li><button type="button">Platform <span className="nf-caret"></span></button></li>
                        <li><button type="button">Solutions <span className="nf-caret"></span></button></li>
                        <li><button type="button">Resources <span className="nf-caret"></span></button></li>
                        <li><button type="button">Open Source <span className="nf-caret"></span></button></li>
                        <li><button type="button">Enterprise <span className="nf-caret"></span></button></li>
                        <li><button type="button">Pricing</button></li>
                    </ul>
                </nav>

                <div className="nf-header-actions">
                    <button type="button" className="nf-icon-btn" aria-label="Search">
                        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                            <path fill="currentColor" d="M10.68 11.74a6 6 0 01-7.922-8.982 6 6 0 018.982 7.922l3.04 3.04a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215zM11.5 7a4.499 4.499 0 10-8.997 0A4.499 4.499 0 0011.5 7z"></path>
                        </svg>
                    </button>
                    <a className="nf-signin-link" href="#signin">Sign in</a>
                    <a className="nf-signup-btn" href="#signup">Sign up</a>
                    <button type="button" className="nf-icon-btn nf-sliders" aria-label="Menu">
                        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                            <path fill="currentColor" d="M15 2.75a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zm0 5a.75.75 0 01-.75.75H7.5a.75.75 0 010-1.5h6.75a.75.75 0 01.75.75zm0 5a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h9a.75.75 0 01.75.75zM3 3.75A1.25 1.25 0 111.75 2.5 1.25 1.25 0 013 3.75zm2.5 5A1.25 1.25 0 114.25 7.5 1.25 1.25 0 015.5 8.75zm-2.5 5A1.25 1.25 0 111.75 12.5 1.25 1.25 0 013 13.75z"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* ---------- hero with the desert illustration ---------- */}
            <section className="nf-hero">
                <svg
                    className="nf-scene"
                    viewBox="0 0 1200 400"
                    preserveAspectRatio="xMidYMax slice"
                    role="img"
                    aria-label="A hooded character in a desert next to a crashed ship"
                >
                    <defs>
                        <linearGradient id="nf-sky" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4aa3d4" />
                            <stop offset="55%" stopColor="#8fcbe6" />
                            <stop offset="100%" stopColor="#d9e8ec" />
                        </linearGradient>
                        <linearGradient id="nf-sand" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e0c193" />
                            <stop offset="100%" stopColor="#c9a273" />
                        </linearGradient>
                    </defs>

                    {/* sky + horizon */}
                    <rect x="0" y="0" width="1200" height="400" fill="url(#nf-sky)" />
                    <circle cx="1010" cy="120" r="46" fill="#fff6dd" opacity="0.65" />

                    {/* far dunes */}
                    <path d="M0 250 Q 150 214 320 244 T 660 236 T 980 250 T 1200 238 L1200 400 L0 400 Z" fill="#e8cfa6" />
                    {/* little domed outpost on the horizon */}
                    <g opacity="0.9">
                        <path d="M872 244 a26 22 0 0 1 52 0 z" fill="#d8c3a2" />
                        <rect x="893" y="232" width="10" height="12" fill="#b9a184" />
                    </g>
                    {/* mid dunes */}
                    <path d="M0 286 Q 220 254 430 282 T 830 274 T 1200 288 L1200 400 L0 400 Z" fill="url(#nf-sand)" />

                    {/* crashed ship half buried in the sand */}
                    <g transform="translate(772 214) rotate(-13)">
                        <path d="M0 60 L206 24 L250 52 L216 92 L18 96 Z" fill="#8d9ba8" />
                        <path d="M0 60 L206 24 L212 44 L14 78 Z" fill="#a9b6c2" />
                        <path d="M96 30 L150 20 L156 44 L102 54 Z" fill="#5d6b78" />
                        <circle cx="196" cy="56" r="13" fill="#6f7d8a" />
                        <path d="M40 96 L96 92 L86 128 L44 122 Z" fill="#7a8894" />
                    </g>

                    {/* foreground dune */}
                    <path d="M0 322 Q 260 292 520 320 T 1000 316 T 1200 330 L1200 400 L0 400 Z" fill="#d3ab7a" />

                    {/* shadow under the character */}
                    <ellipse cx="600" cy="378" rx="118" ry="16" fill="#a9814f" opacity="0.5" />

                    {/* hooded character */}
                    <g transform="translate(600 378) scale(1.45)">
                        {/* robe */}
                        <path d="M-56 0 Q -50 -104 0 -140 Q 50 -104 56 0 Z" fill="#5c4130" />
                        <path d="M-56 0 Q -50 -104 0 -140 Q 20 -120 30 -84 Q -6 -46 -18 0 Z" fill="#6d4e39" />
                        {/* tentacle arms */}
                        <path d="M-54 -34 q -34 12 -40 42 q 16 -18 42 -22 Z" fill="#5c4130" />
                        <path d="M54 -34 q 34 12 40 42 q -16 -18 -42 -22 Z" fill="#5c4130" />
                        {/* hood opening */}
                        <path d="M-34 -104 Q 0 -136 34 -104 Q 30 -60 0 -56 Q -30 -60 -34 -104 Z" fill="#241812" />
                        {/* hood brim */}
                        <path d="M-40 -100 Q 0 -146 40 -100 Q 0 -122 -40 -100 Z" fill="#4a3427" />
                        {/* ears */}
                        <path d="M-36 -116 l 8 -13 l 11 11 Z" fill="#5c4130" />
                        <path d="M36 -116 l -8 -13 l -11 11 Z" fill="#5c4130" />
                        {/* eyes */}
                        <ellipse cx="-14" cy="-92" rx="10" ry="11" fill="#f6f2ea" />
                        <ellipse cx="14" cy="-92" rx="10" ry="11" fill="#f6f2ea" />
                        <circle cx="-14" cy="-91" r="5" fill="#d33a2c" />
                        <circle cx="14" cy="-91" r="5" fill="#d33a2c" />
                        <circle cx="-14" cy="-91" r="2" fill="#4a1410" />
                        <circle cx="14" cy="-91" r="2" fill="#4a1410" />
                    </g>
                </svg>

                {/* 404 + speech bubble sit on top of the illustration */}
                <div className="nf-hero-text">
                    <IconMoodPuzzled stroke={2} />
                    <p className="nf-404">404</p>
                    <div className="nf-bubble">
                        <p>This is not the<br />web page you are<br />looking for.</p>
                    </div>
                </div>

                {/* ---------- sign in dropdown ---------- */}
                <div className="nf-signin-pop">
                    <h2>Sign in to GitHub</h2>

                    <label className="nf-field-label" htmlFor="nf-user">Username or email address</label>
                    <input id="nf-user" className="nf-input nf-input-focus" type="text" defaultValue="" />

                    <div className="nf-label-row">
                        <label className="nf-field-label" htmlFor="nf-pass">Password</label>
                        <a href="#forgot">Forgot password?</a>
                    </div>
                    <input id="nf-pass" className="nf-input" type="password" defaultValue="" />

                    <button type="button" className="nf-green-btn">Sign in</button>
                    <a className="nf-other" href="#other">or continue with other methods</a>
                </div>
            </section>

            {/* ---------- search + footer ---------- */}
            <section className="nf-search">
                <p className="nf-search-title">Find code, projects, and people on GitHub:</p>
                <div className="nf-search-row">
                    <input className="nf-input nf-search-input" type="text" defaultValue="" />
                    <button type="button" className="nf-search-btn">Search</button>
                </div>

                <p className="nf-links">
                    <a href="#support">Contact Support</a>
                    <span> &ndash; </span>
                    <a href="#status">GitHub Status</a>
                    <span> &ndash; </span>
                    <a href="#twitter">@githubstatus</a>
                </p>
            </section>

            <div className="nf-green-bar"></div>
        </div>
    );
}

export default NotFound;

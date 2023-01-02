import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/movie.svg";
import "./header.scss";

const headerNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Movies",
        path: "/movies"
    },
    {
        display: "TV shows",
        path: "/tv"
    }
]

export default function Header() {

    const { pathName } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathName);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        }
        window.addEventListener("scroll", shrinkHeader)
        return () => {
            window.removeEventListener("scroll", shrinkHeader)
        }
    }, [])

    return (
        <div ref={headerRef} className="header">
            <div className="header_wrap container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link to="/">entertainU</Link>
                </div>
                <ul className="header_nav">
                    {headerNav.map((e, i) => (
                        <li key={i} className={`${i === active ? "active" : ""}`}>
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

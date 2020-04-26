import React from 'react';
import {
    Link,
    useLocation,
    useHistory
} from "react-router-dom";
import styled from 'styled-components';
import useSideBar from './hooks/useSideBar';
import { SideNav, NavUl } from './styles/styles';

function App() {
    const {
        open,
        onHamburgerClick,
        isMobile
    } = useSideBar();

    const history = useHistory();
    const currentPath = useLocation().pathname;

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        history.push((event.target as any).value)
    }

    return (
        <React.Fragment>
            {isMobile && <SideNav className="mobile">
                <button
                    className={`hamburguer ${open ? "selected" : ""}`}
                    type="button"
                    onClick={() => { onHamburgerClick() }}
                >
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </button>
                {open && <NavUl>
                    <li>
                        <button
                            type="button"
                            value="/"
                            className={`${currentPath === "/" ? "selected" : ""}`}
                            onClick={handleButtonClick}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            value="/1"
                            className={`${currentPath === "/1" ? "selected" : ""}`}
                            onClick={handleButtonClick}
                        >
                            Home1
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            value="/2"
                            className={`${currentPath === "/2" ? "selected" : ""}`}
                            onClick={handleButtonClick}
                        >
                            Home2
                        </button>
                    </li>
                </NavUl >}
            </SideNav >}
            {
                !isMobile && <SideNav className="web">
                    <NavUl>
                        <li>
                            <button
                                type="button"
                                value="/"
                                className={`${currentPath === "/" ? "selected" : ""}`}
                                onClick={handleButtonClick}
                            >
                                Home
                        </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                value="/1"
                                className={`${currentPath === "/1" ? "selected" : ""}`}
                                onClick={handleButtonClick}
                            >
                                Home1
                        </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                value="/2"
                                className={`${currentPath === "/2" ? "selected" : ""}`}
                                onClick={handleButtonClick}
                            >
                                Home2
                        </button>
                        </li>
                    </NavUl>
                </SideNav>
            }
        </React.Fragment >
    );
}


export default App;

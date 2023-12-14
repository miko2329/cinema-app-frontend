import "./App.css"
import {Link, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./hooks";
import {initialUserState, set, userSelector} from "./store/slices/userSlice.ts";

function App() {

    const dispatch = useAppDispatch();

    const user = useAppSelector(userSelector)

      return (
        <div>
            <nav>
                <div className={"container"}>
                    <div className={"container_inner"}>
                        <ul className={"nav-menu"}>
                            <li><Link className={"link"} to={"/country/all"}>Countries</Link></li>
                            <li><Link className={"link"} to={"/person/all"}>People</Link></li>
                            <li><Link className={"link"} to={"/award/all"}>Awards</Link></li>
                        </ul>
                        <ul className={"sign-menu"}>
                            {user.userResponse.id !== 0 ? <>
                                    <li><p className={"link"}>{user.userResponse.firstname} {user.userResponse.lastname} {user.userResponse.email}</p></li>
                                    <li><button className={"sign-out"} onClick={() => {
                                        const isConfirmed = confirm("Do you want sign out?")

                                        if(isConfirmed) {
                                            dispatch(set(initialUserState))
                                        }
                                    }}>Sign out</button></li>
                                </> :
                                <>
                                    <li><Link className={"link"} to={"/signin"}>Sign in</Link></li>
                                    <li><Link className={"link"} to={"/signup"}>Sign up</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"container"}>
                <Outlet/>
            </div>
        </div>
      )
}

export default App

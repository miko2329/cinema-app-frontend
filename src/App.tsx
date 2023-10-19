import "./App.css"
import {Outlet} from "react-router-dom";

function App() {

  return (
    <div>
        <nav>
            <div className={"container"}>
                <ul className={"nav-menu"}>
                    <li>Countries</li>
                    <li>Actors</li>
                    <li>Directors</li>
                    <li>Awards</li>
                </ul>
            </div>
        </nav>
        <div className={"container"}>
            <Outlet/>
        </div>
    </div>
  )
}

export default App

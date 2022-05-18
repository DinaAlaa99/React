import FirstComponent from "./Components/FirstComponent"
import SecondComponent from "./Components/SecondComponent"
import './main.css'
let App = () => {
    return (

        <>
           
            <div className="content card pb-3">
        < div className = "firstcomponent" >
                <FirstComponent />

        </div>
            < div className = "secondcomponent" >
                <SecondComponent/>
            </div></div > </>
    )
}
export default App
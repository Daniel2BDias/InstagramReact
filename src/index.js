import ReactDOM from "react-dom";
import Cabecalho from "./components/Cabecalho";
import Main from "./components/Main";


const App = () => {
    return (
        <div>
            <Cabecalho />
            <Main />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.root'));
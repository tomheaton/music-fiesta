import {useState} from "react";

const App = () => {

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="app">
            { loading ? (
                <header className="app-header">
                    <div>loading...</div>
                </header>
            ) : (
                <header className="app-header">
                    <h1>music fiesta</h1>
                    <button>
                        <code>login with spotify</code>
                    </button>
                </header>
            ) }
        </div>
    );
}

export default App;

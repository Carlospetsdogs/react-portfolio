
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import "./App.css"


const App = () => {
  return (

      <div className="App">
        <Header />
        <main>
          <Outlet>
          </Outlet>
        </main>
        <Footer />
      </div>

  );
};

export default App;


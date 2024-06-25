
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';


const App = () => {
  return (

      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

  );
};

export default App;


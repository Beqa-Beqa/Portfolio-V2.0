import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header, Main } from '../Containers';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer className='p-2'>

      </footer>
    </>
  )
};

export default App;
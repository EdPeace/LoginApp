import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Login/Login';

function App() {
  var myClasses=["text-center","border","border-gray-400","bg-gradient-to-b","from-green-200","to-blue-300"];
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section className={myClasses.join(" ")}>
        <Login></Login>
      </section>
      

    </section>
  );
}

export default App;

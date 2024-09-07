import './App.css';
import Footer from './componentes/layout/Footer';
import PageTitle from './componentes/layout/PageTitle';
import Section1 from './componentes/section1';
import Section2 from './componentes/section2';
// import Horizontal from 'componentes/layout/horizontal';
import Section4 from 'componentes/section4';



function App() {
  return (
    <div id="parallax__cont">
      <PageTitle />
      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        {/* <div className='block'>
          <Horizontal/>
        </div> */}
        <Section4/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
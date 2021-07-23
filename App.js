import HeaderComp from './sample-template/Header.jsx';
import BodyContainer from './sample-template/BodyContent.jsx';
import FooterContainer from './sample-template/Footer.jsx';
import './App.scss';
import './sample-template/Main.js';

function App() {
  return (
    <div> 
      <HeaderComp />
      <BodyContainer />
      <FooterContainer />
    </div>
  );
}

export default App;

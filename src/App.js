import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Flashcard from './components/Flashcard';
import Maths from './components/Maths';
import Rel_func from './components/Rel_func';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Homes from './components/Homes';
import Login from './components/Login';
const faqItems = [
  {
    question: "Can Educational flashcards be used for all age groups ?",
    answer: " Ans: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iste doloribus harum. Possimus eius natus,fuga deserunt suscipit animi ullam totam soluta minus corrupti hic ducimus numquam dolores, commodi ex."
  },
  {
    question: "How  Educational flashcards works?",
    answer: " Ans: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iste doloribus harum. Possimus eius natus,fuga deserunt suscipit animi ullam totam soluta mins corrupti hic ducimus numquam dolores, commodi ex.."
  },
  {
    question: "Can Educational flashcards be used for test preperations ?",
    answer: "Ans :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iste doloribus harum. Possimus eius natus,fuga deserunt suscipit animi ullam totam soluta minu corrupti hic ducimus numquam dolores, commodi ex."
  },
  // Add more FAQ items as needed
];
function App() {
  return (
    <>     
      <Router>
      <Navbar/>
      <Home/>

      <Routes>
        <Route path="/flashcard" exact element={<Flashcard/>} />
        <Route path="/home" exact element={<Homes/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/flashcard/mathematics" exact component={<Maths/>} />
        <Route path="/flashcard/mathematics/relation-function" exact element={<Rel_func/>} />
      </Routes>
      <Footer/>
      <Faq faqItems={faqItems} />
      </Router>
      </>
  );
}

export default App;

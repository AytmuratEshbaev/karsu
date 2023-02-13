import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import QuotesPage from './Pages/QuotesPage';
import AdmissionDocuments from './Pages/AdmissionDocuments';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<QuotesPage />} />
        <Route path='/admission-documents' element={<AdmissionDocuments />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

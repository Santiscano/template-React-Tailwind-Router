import { Routes, Route } from 'react-router-dom';

// paginas a renderizar
import Init from '../pages/Init'

const AppRouter = () => (
 <Routes>
  <Route path="/" element={<Init />} />
 </Routes>
);

export default AppRouter;

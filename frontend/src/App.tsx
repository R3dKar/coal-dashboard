import { Outlet } from 'react-router';
import NavigationBar from './components/navigation-bar/navigation-bar';

export const App = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default App;

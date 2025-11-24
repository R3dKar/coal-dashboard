import { createBrowserRouter, Navigate } from 'react-router';
import App from '../app';
import StoragePage from '../pages/storage-page/storage-page';
import UploadPage from '../pages/upload';
import PileData from '../components/pile-data/pile-data';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, element: <Navigate replace to='/piles' /> },
      {
        path: 'piles',
        Component: StoragePage,
        children: [
          { path: ':id/:number', Component: PileData },
        ]
      },
      { path: 'upload', Component: UploadPage },
    ]
  }
]);

export default router;

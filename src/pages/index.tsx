import MainLayout from '@layouts/MainLayout';
import NavBar from '@modules/NavBar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
      return (
            <div className="flex flex-col h-screen">
                  <NavBar />
                  <MainLayout />
            </div>
      );
};

export default Home;

import HomeLayout from '@layouts/HomeLayout';
import NavBar from '@modules/NavBar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
      return (
            <div className="flex flex-col h-screen">
                  <NavBar />
                  <HomeLayout />
            </div>
      );
};

export default Home;

import PositionLayout from '@layouts/PositionLayout';
import NavBar from '@modules/NavBar';
import type { NextPage } from 'next';
const Home: NextPage = () => {
      return (
            <div className="flex flex-col h-screen">
                  <NavBar />
                  <PositionLayout />
            </div>
      );
};

export default Home;

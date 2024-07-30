import React from 'react';
import Varies from './Varies.tsx'

const Home: React.FC = () => {
  return(<>
  <div className='frontWall'>
  <h1>Develop Experience with Sucess in your own way</h1>
    <p>struggle</p>
  </div>
  <div className='variesService'>
    <Varies title="HTML5 CSS" />
    <Varies title="HTML5 CSS" />
    <Varies title="HTML5 CSS" />
    <Varies title="HTML5 CSS" />
    <Varies title="HTML5 CSS" />
  </div>
  </>)
}

export default Home;


// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
// import Footer from './components/Footer';

import logo from "./assets/logo.png";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';


function App() {
  const data = {
    hero:{
      appType: 'Mesriya',
      tagLine: 'Why not Mesriya the fairest and the most transparent way to your Tenders?',
      description: 'come try our services from now on',
      mainActionText: 'Mesriya.com',
      extraActionText: 'Mesriya',
    },
    step1: {
      title: 'Create an account',
      heading: 'Create/login to an existing account to get started',
      description: 'An account is created with your email and a desired password',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explore Tenders',
      heading: 'Find your favorites Tenders from anywhere.',
      description: 'find all tenders at one place and easily while enjoying leasure.',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Send Proposals',
      heading: "When you've found the tender you want, just bid !!!",
      description: "E chereta the future of tenders",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Come try us.',
      description: 'Available on mesriya.com . Start your premium experience now.',
      mainActionText: 'vist mesriya.com',
      extraActionText: 'Mesriya',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        {/* <Navbar logo={logo}/> */}
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>
        
        <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">How the app works </div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          {/* <Footer logo={logo}/> */}
      </div>
    </div>
  );
}

export default App;

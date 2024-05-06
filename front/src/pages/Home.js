import React from 'react';
import Banner from '../components/Banner';
import Chat from '../img/icon-chat.png';
import Money from '../img/icon-money.png';
import Security from '../img/icon-security.png';
import FeatureItem from '../components/FeatureItem';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          logo={Chat}
          altText="Chat-Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          logo={Money}
          altText="Money"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          logo={Security}
          altText="Security"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
        </div>
    );
};

export default Home;
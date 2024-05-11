import React from 'react';
import Banner from '../components/Banner';
import FeatureItem from '../components/FeatureItem';
import data from '../data/data.json';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map(item => (
                    <FeatureItem
                        key={item.id}
                        logo={item.icon}
                        altText={item.altText}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
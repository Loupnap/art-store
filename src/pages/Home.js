import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Art Store</h1>
                <p>Discover unique furry art and more!</p>
                <h2>Featured Products</h2>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
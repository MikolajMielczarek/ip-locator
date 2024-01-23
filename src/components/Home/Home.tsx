import React from 'react'

import ListSearches from '../ListSearches/ListSearches';
import Search from '../Search/Search';
import User from '../User/User';
import LastSearch from '../LastSearch/LastSearch';
  
const Home: React.FC = () => {
    
    return (
        <section className="home">
            <section className="list">
                <ListSearches />
            </section>
            <div>
                <section className="user">
                    <User />
                </section>
                <section className="search">
                    <Search />
                </section>
                <section className="last-search">
                    <LastSearch />
                </section>
            </div>
        </section>
    )
}

export default Home;
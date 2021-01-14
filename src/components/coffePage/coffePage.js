import React, {useState, useEffect} from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import Loader from 'react-loader-spinner';
import {ItemPage} from './itemPage';
import '../../sass/coffeepage.sass';
import coffee_girl from '../../img/coffee_girl.jpg';
import Beans_logo_dark from '../../logo/Beans_logo_dark.svg'



export const CoffePage = () => {
    const [items, setItems] = useState([]);
    const [err, setError] = useState(false);
    const [search, setSearch] = useState('');
    const [filterItem, setFilterItem] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
   
    useEffect(() => {
        const getData = () => {

            fetch("db.json")
                .then(response =>  response.json())
                .then(json => {
                    setItems(json.coffee);
                })
                .catch(() => {
                    setError(true)
                    console.log('err')});
        };

        getData();
    }, []);

     useEffect(() => {
        setFilteredItems(
            filterItem ? items.filter(item => item.country === filterItem) :
                items.filter((item) => 
                    item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
                )
            );
    },[items,search, filterItem]);
    /* console.log(search);
    console.log(items.filter((item) => 
                    item.name.toLowerCase().trim().includes('')
                )); */
    return (
        <>
            <div className="banner" >
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                     <Header/>
                </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
        </div>
    </div>
    <section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={coffee_girl} alt="girl"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo"/>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input 
                        onChange={(e) => setSearch(e.target.value)}
                        id="filter" 
                        type="text" 
                        placeholder="start typing here..." 
                        className="shop__search-input"/>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button onClick={() => setFilterItem('Brazil')} className="shop__filter-btn">Brazil</button>
                            <button onClick={() => setFilterItem('Kenya')} className="shop__filter-btn">Kenya</button>
                            <button onClick={() => setFilterItem('Columbia')} className="shop__filter-btn">Columbia</button>
                            <button onClick={() => setFilterItem('')} className="shop__filter-btn">All</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {err ? <div>Sorry,we will fix it soon...</div> : filteredItems ?  <ItemPage openItem={filteredItems}/>  : 
                        <Loader type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        /> 
                        }
                    </div>  
                </div>
            </div>
                </div>
    </section>
            <Footer/>
        </>
    )
}


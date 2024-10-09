import React from "react";
import ReactDOM from "react-dom"

/**
 * Header
 *  -Logo
 *  -nav-items
 * Body
 *  -search bar
 *  - ResturantCardContainer
 *      -ResturantCards
 *          - image
 *          - name of resturant
 *          - cusines
 *          - star rating
 *          - delievery time
 * Footer
 *  -Copyrights
 *  -links
 *  - Adresss
 *  -contact
 * 
 */
const HeaderComponent = ()=>(
    <div className="header">
        <div className="logo"> 
            <img  className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BcogqOSDvFkYR7jE_mz_NQ94rxCsySE4aw&s"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
const styleCard ={
    backgroundColor:"#f0f0f0"
}
const ResturantCardComponent = ()=>(
    <div className="res-card" style={styleCard}>
        <img  className="res-card-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/33282528-7b2c-458b-ace7-76ce58009158_7408.JPG"/>
        <h3>Tadipatri Dum Biryani</h3>
        <p>Biryani,South Indian cusine</p>
        <div> Star rating <b>4.5</b>
            <span className="delivery-time">
                45min
            </span>
        </div>
    </div>
)

const BodyComponent = ()=>(
    <div className="body">
        <div className="search">Search bar</div>
        <div className="res-container">
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            <ResturantCardComponent />
            
        </div>
    

    </div>

);
const AppLayout = ()=>(
    <div className="app">
        {/* Header */}
        <HeaderComponent />

        {/* //Body */}
        <BodyComponent />

        {/* //Footer */}
    </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
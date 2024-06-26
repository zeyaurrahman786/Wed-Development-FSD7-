import React from 'react'
import '../src/App.css'
import '../src/index.jsx'

const App = () => {
    return (
        <>
            <div class="parent">
                <img src="../src/Images/BackGround.png" alt="image" />
                <div class="navbar">
                    <div class="navbar-left">
                        <span>View food</span>
                        <span>Add restro</span>
                    </div>
                    <div class="navbar-right">
                        <span id="openSignup">SignUp</span>
                        <span>Login</span>
                    </div>
                </div>
                <div class="heading-zomato">
                    <img class="img" src="../src/Images/ZomatoLogo.png" alt="image" />
                </div>
                <div class="message-container">
                    <h2>Discover the best food & drinks in Chitkara</h2>
                    <div class="input-container">
                        <select name="" id="">
                            <option value="Chennai">Chennai</option>
                            <option value="Jaipur">Jaipur</option>
                            <option selected value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>

                        <input type="text" placeholder="Search for restaurant or a dish" />
                    </div>
                </div>
            </div>


            <div class="footer">


                <section class="container_cards">

                    <div class="we_offer__cards">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card1 image" />
                        <div class="we_offer__cards_content">
                            <h2>Order Online</h2>
                            <p>stay home and  order to your  doorstrap</p>
                        </div>
                    </div>

                    <div class="we_offer__cards">
                        <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card1 image" />
                        <div class="we_offer__cards_content">
                            <h2>Dining</h2>
                            <p>We ensure timely delivery to our customers</p>
                        </div>
                    </div>
                </section>

                
                <section class="container_collections">
                    <h1>Collections</h1>
                    <div class="sub_heading__container">
                        <span>Explore curated lists of top restaurants, cafes, pubs in Pune based on trends</span>
                        <span id="span">All collections in Pune</span>
                    </div>
                    <div class="collections__cards_container">

                        <div class="cards card1">
                            <div class="overlay">
                                <img src="https://plus.unsplash.com/premium_photo-1661667075996-18a04b626fe2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                            <div class="collections__content">
                                <h4>Live Cricket Screening</h4>
                                <span>56 places</span>
                            </div>
                        </div>

                        <div class="cards card2">
                            <div class="overlay">
                                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                            </div>
                            <div class="collections__content">
                                <h4>Koregaon Park specials</h4>
                                <span>12 places</span>
                            </div>
                        </div>

                        <div class="cards card3">
                            <div class="overlay">

                                <img src="https://media.istockphoto.com/id/1337755660/photo/luchi.jpg?s=1024x1024&w=is&k=20&c=UiGHMYXMgRFqjXtlbkmEd8wEUDkga51wsl3XLj64aOY=" />
                            </div>
                            <div class="collections__content">
                                <h4>Newly opened Restaurants</h4>
                                <span>36 places</span>
                            </div>
                        </div>

                        <div class="cards card4">
                            <div class="overlay">
                                <img src=https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/> 
                            </div>
                            
                            <div class="collections__content">
                                <h4>Trending Pubs Near me</h4>
                                <span>16 places</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default App
import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import "./testimonialGrid.scss";
import TestimonialGrid from "../../components/testmonyGrid/testimonyGrid";
import Tenanthero from "../../components/tenantHero/tenantHero";
import SellHomeSection from "../../components/sellHome/sellHome";
import WhyBuySection from "../../components/whyUs/whyUs";
import Lowerprice from "../../components/lowerPrice/lowerPrice";
import Footer from "../../components/footer/footer";
import Addsave from "../../components/addSave/addSave";
import SearchHome from "../../components/searchHome/searchHome";


function HomePage({ tenant }) {
  const { currentUser } = useContext(AuthContext);
  const isTenant = currentUser?.role === "tenant";
  console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        {currentUser && isTenant && (
          <div>
            <Tenanthero/>
            <div>
              <SellHomeSection/>
            </div>
            <WhyBuySection/>
            {/* <div className="testimonial-section">
      <h2>What hosts like you say</h2>
      <div className="testimonial-grid">
      {TestimonialGrid.map((item, idx) => (
          <div className="testimonial-card" key={idx}>
            <p className="quote">“{item.quote}”</p>
            <div className="user">
              <div className="info">
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div> */}
    <Lowerprice/>
            </div>
          )}


           {currentUser && !isTenant && (
            <div>
               <h1 className="title" style={{paddingBottom:"1rem"}}>Find Real Estate & Get Your Dream Place </h1>
          <p>
            Kingshome Premier agents are local experts with years of experience in high-end real estate, so we can help buyers like you suceed in today's nmarket.
          </p>
          <div className="see" style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
          <SearchBar />
          </div>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
          </div>
          
          )}
        </div>
      </div>
      
      {currentUser && !isTenant && (
      <div className="imgContainer" style={{paddingTop:"15%"}}>
        <img src="/bg.png" alt="" />
      </div>
         )}
          {currentUser && !isTenant && (
            <div>
            <Addsave/>
            <div className="" style={{background:"#0d35eb", height:"2rem", width: "full", marginLeft:"3rem"}}> </div>
            <SearchHome/>
            </div>
             )}
             <Footer/>
    </div>
  );
}

export default HomePage;

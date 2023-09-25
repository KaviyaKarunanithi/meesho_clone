import React from "react-dom";
import Image from "./search.png";
import Mobile from "./mobile.png";
import Profile from "./profile.png";
import Cart from "./cart.png";
import "./meesho.css";
function Mes() {
  return (
    <div class="parent">
      <nav>
        <div class="left">
          <div class="left0">
            <a>meesho</a>
          </div>
          <div class="left1">
            <div class="searchicon">
              <img src={Image} className="image" alt="" />
            </div>
            <form>
              <input
                type="search"
                placeholder="Try Saree, Kurti or Search from Product Code"
                id="input"
                class="inputsearch"
              />
            </form>
          </div>
        </div>
        <div class="headerright">
          <div class="downloadcontain">
            <div class="mobileicon">
              <img src={Mobile} />
            </div>
            <p>Download App</p>
            <div class="downloadhover">
              <p>Download form</p>

              <a href="" class="dbtn">
                <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" />
              </a>
              <a href="" class="dbtn1">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
              </a>
            </div>
          </div>
          <div class="seller">
            <p>Become a Supplier</p>
          </div>
          <div class="profilecont">
            <div class="profile">
              <div class="picon">
                <img src={Profile} />
              </div>
              <p>Profile</p>
            </div>
            <div class="cart">
              <div class="cicon">
                <img src={Cart} />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Mes;

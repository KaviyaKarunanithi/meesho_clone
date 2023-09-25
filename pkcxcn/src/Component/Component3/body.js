import Store from "./store.png";
import Supplier from "./suplier.jpeg";
import "./body.css";
function Body() {
  return (
    <div className="App">
      <div class="total">
        <div class="main">
          <h1>Lowest Prices</h1>
          <h2> Best Quality Shopping</h2>
          <div class="main2">
            <div class="fd">
              <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" />
              <p>Free Delivery</p>
            </div>
            <div class="cd">
              <img src="https://images.meesho.com/images/pow/cod_jamun.svg" />
              <p>Cash on Delivery</p>
            </div>
            <div class="er">
              <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" />
              <p>Easy Returns</p>
            </div>
          </div>
          <button>
            <img src={Store} />
            Download the Meesho App
          </button>
        </div>
        <div class="rightmain">
          <img src="https://images.meesho.com/images/marketing/1687149525469_512.webp" />
        </div>
      </div>

      <div class="head">
        <div class="head1">
          <p>____________________________</p>
        </div>
        <h1>Top Categories to choose from</h1>
        <div class="head2">
          <p>____________________________</p>
        </div>
      </div>

      <div class="fashion">
        <div class="wstore">
          <img src="https://images.meesho.com/images/marketing/1692190996099_400.webp" />
        </div>
        <div class="mstore">
          <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp" />
        </div>
        <div class="kstore">
          <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp" />
        </div>
      </div>
      <div class="essential">
        <div class="subessen">
          <div class="ebtn">
            <button>View All</button>
          </div>
          <div class="es1">
            <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691858580_150.webp" />
          </div>
          <div class="es2">
            <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691818629_150.webp" />
          </div>
          <div class="es3">
            <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691781261_150.webp" />
          </div>
        </div>
      </div>
      <div class="newstyle">
        <div class="subnew">
          <div class="newbtn">
            <button>View All</button>
          </div>
          <div class="new1">
            <img src="https://images.meesho.com/images/marketing/1678691960553_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691971903_150.webp" />
          </div>
          <div class="new2">
            <img src="https://images.meesho.com/images/marketing/1678691936892_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691948963_150.webp" />
          </div>
          <div class="new3">
            <img src="https://images.meesho.com/images/marketing/1678691925419_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691914513_150.webp" />
          </div>
        </div>
      </div>
      <div class="reseller">
        <div class="res">
          <p>Become a Reseller and</p>
          <h1>Start your Online Business</h1>
          <h2> with Zero Investment</h2>
          <div class="resimg">
            <div class="resimg1">
              <img src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" />
            </div>
            <div class="resimg2">
              <img src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" />
            </div>
          </div>
        </div>
      </div>
      <div class="finalbody">
        <img src={Supplier} />
      </div>
    </div>
  );
}
export default Body;

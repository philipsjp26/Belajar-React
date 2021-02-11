import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ParentBox">
      <Foto />
      <ProdukInfo isDiscount="no" category="Modern" />

      <div className="Review-box">
        <h2>Reviews</h2>
        <div className="item">
          <img src="https://images.pexels.com/photos/2330140/pexels-photo-2330140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <div className="User">
            <h3>Philips Jose Patric</h3>
            <p>Harga murah tapi kualitas bukan kaleng - kaleng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItems() {
  // Data dummy 
  const users = [
    {
      "id": 1,
      "name": "Felicio noronha",
      "review": "ganteng sekali"
    },
    {
      "id": 2,
      "name": "Juan Karly Matheus",
      "review": "ganteng sekali"
    },
    {
      "id": 3,
      "name": "Kevin Kurniawan",
      "review": "ganteng sekali"
    }
  ];
}

function Foto(){
  return (
    <div className="Foto">
      <img src="sneakers2.png" />
    </div>
  );
}

// check if diskon exists
function CheckDiscount(props){
  const { isDiscount } = props;
  if(isDiscount == "yes"){
    return(
      <strong>
        <p>Diskon 50% Off</p>
      </strong>
    );
  }
  else if(isDiscount == "coming"){
    return(
      <strong>
        <p>Discount is coming</p>
      </strong>
    );
  }
  else{
    return(
      <strong>
        <p>Tidak ada diskon</p>
      </strong>
    );
  }
}

function ProdukInfo(props) {
    const price = 400000;
    const { category, isDiscount } = props;
    const benefits = ["Anti air", "Tidak Tahan lama", "Siap pakai"];
    const listBenefits = benefits.map((itemBenefits) => 
      <li>{itemBenefits}</li>
    );
    return (
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title">Pinky Swagger</h1>
          <p className="Price">IDR {price}</p>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="info">
            The word was already in use at least as early as 1887, 
            when the Boston Journal made reference to "sneakers" as "the name boys give to tennis shoes."
            The name "sneakers" originally referred to how quiet the rubber soles were on the ground, 
            in contrast to noisy standard hard leather sole dress shoes.
          </p>
          <ul>
            {listBenefits}
          </ul>
          <a onClick={(e) => tambahCart(category, e)} href="#">Add to Cart</a>
        </div>  
    );
}

function tambahCart(e) {
  return(
    console.log("kategori barang ..." + e)
  );
}

export default App;

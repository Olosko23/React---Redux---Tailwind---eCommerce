import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';
//import Skeleton from 'react-loading-skeleton';

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter]= useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(()=> {
    const getProduts = async() => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProduts();
  }, []);

  const Loading = () => {
    return(
      <div className="flex justify-center flex-row gap-10 ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
  )}

const filterProduct = (cat) => {
  const updatedList = data.filter((x) => x.category === cat);
  setFilter(updatedList)
}
const ShowProducts = () => {
  return(
    <>
    <div className="flex flex-row gap-8 justify-center">
    <button className="bg-slate-500 rounded-lg px-6 py-2 hover:outline-double" onClick={() => setFilter(data)}>All</button>
    <button className="bg-slate-500 rounded-lg px-6 py-2 hover:outline-double" onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
    <button className="bg-slate-500 rounded-lg px-6 py-2 hover:outline-double"onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
    <button className="bg-slate-500 rounded-lg px-6 py-2 hover:outline-double"onClick={() => filterProduct("jewelery")}>Jewelery</button>
    <button className="bg-slate-500 rounded-lg px-6 py-2 hover:outline-double" onClick={() => filterProduct("electronics")}>Electronics</button>
    </div>

    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {filter.map((product) => {

          return(
    
          <div key={product.id} className="rounded overflow-hidden shadow-lg grid place-items-center">
            <img className="object-contain h-96 w-56" src={product.image} alt={product.title}/>
            <div className="px-6 py-1 flex flex-col justify-center">
              <div className="font-bold text-xl mb-2 flex justify-center">{product.title}</div>
              <p className="text-gray-700 flex justify-center font-semibold mt-3 text-lg">$ {product.price}</p>
            </div>
            <div>
              <Link to={`/Products/${product.id}`}>
                <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">Buy Now</button>
              </Link>
            </div>
         </div>
            )
        })}
    </div>

    </>
  )
}

  return (
    <div className="">
        <div className="pt-10 mt-5">
          <div>
            <div className="text-center my-6">
              <h1 className='text-2xl'>Latest Products</h1>
            </div>
          </div>
          <div className="">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
    </div>
  )
}

export default Product
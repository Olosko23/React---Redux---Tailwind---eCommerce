import React, {useState, useEffect} from 'react'
import { BsStar } from 'react-icons/bs';
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    })
    const Loading = () => {
        return(
            <div>
                Loading....
            </div>
        )
    }
    const ShowProduct = () => {
        return(
            <div className="rounded overflow-hidden shadow-lg flex flex-col-2 gap-20 justify-center h-screen">
                <div className="grid place-items-center">
                    <img className="object-contain h-96 w-56" src={product.image} alt={product.title} />
                </div>
                <div className="h-2/3">
                    <h4 className="capitalize font-bold">{product.category}</h4>
                    <h1 className="">{product.title}</h1>
                    <p className="leading-4">Rating: {product.rating && product.rating.rate}</p>
                    <i><BsStar /></i>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                    <div className="flex flex-row gap-5 px-3 py-5">
                    <button className="rounded-xl shadow-lg py-4 px-6 bg-slate-600">Add to Cart</button>
                    <button className="rounded-xl shadow-lg py-4 px-6 bg-slate-200">Go to Cart</button>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="pt-10">
        <div className="pt-10">
            <div className="px-10" >
                {loading ? <Loading /> :<ShowProduct />}
            </div>
        </div>
    </div>
  )
}

export default Product
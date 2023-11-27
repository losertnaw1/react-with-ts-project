// @flow
import {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from './Form';
interface Product {
  id : string;
  title : string;
  imgUrl : string;
  price : string;
  stock : string,
};
const Product:React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [newProduct, setNewProduct] = useState<Product>({id : '0', title : '' , imgUrl : '', price : '0', stock : '0'})
  const baseUrl = 'http://localhost:3000/';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}product`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      
    }
  }

  const addProduct = async () => {
    console.log('bruh');
    
    try {
      await axios.post(`${baseUrl}product`, newProduct);
      fetchData();
      setNewProduct({ id: '0', title: '', imgUrl: '' , price : '0', stock : '0'});
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`${baseUrl}${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting Product:', error);
    }
  };

  const handleChange = () => {
    console.log('handleChange');
    
  };

  return (
    <div>
      {products.map(p => {
        return (
          <div key={p.id} className='group relative'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <img src={p.imgUrl} alt={p.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700">{p.title}</h3>
              <p className='text-sm font-medium text-gray-900'>Price :{'$' + p.price}</p>
            </div>
          </div>
        )
      })}
      {/* Add product */}
      <div className="addProduct">
        <p>Add more here</p>
        <ProductForm newProduct={newProduct} handleChange={handleChange} addProduct={() => addProduct()}></ProductForm>
      </div>
    </div>
  );
};

export default Product;

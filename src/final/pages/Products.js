import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <section className='section products-style'>
      <div className='products'>
        {products.map((product) => {
          return ( <center><li>
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
            </li>
            </center>
            
          );
        })}
      </div>
    </section>
  );
};

export default Products;

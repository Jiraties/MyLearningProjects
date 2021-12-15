import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <Link to="/products/p1">A Book</Link>
        <Link to="/products/p2">A Carpet</Link>
        <Link to="/products/p3">An Online Course</Link>
      </ul>
    </section>
  );
};

export default Products;

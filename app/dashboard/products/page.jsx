import { fetchProducts } from "@/app/lib";
import { deleteProduct } from "@/app/lib/actions";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import Link from "next/link";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1

  const {count, products} = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product ..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image
                  src={product.img || "/noproduct.jpg"}
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.description.slice(0, 13)}...</td>
            <td>${product.price}</td>
            <td>{product.createdAt?.toString().slice(4, 16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id}/>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
};

export default Products;

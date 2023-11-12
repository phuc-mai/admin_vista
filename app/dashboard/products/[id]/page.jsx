import { fetchSingleProduct } from "@/app/lib";
import styles from "@/styles/singleProduct.module.css";
import { productCategory } from "@/constant";

import Image from "next/image";
import { updateProduct } from "@/app/lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.productImagePath || "/noavatar.png"} alt="product photo" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}/>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title}/>
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Category</label>
          <select name="category" id="category">
          {productCategory.map((category) => (
            <option value={category}>{category}</option>
          ))}
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder={product.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
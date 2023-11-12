import styles from "@/styles/addProduct.module.css";
import { productCategory } from "@/constant";
import { addProduct } from "@/app/lib/actions";

const addProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          {productCategory.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input type="number" placeholder="Price" name="price" required />
        <input type="number" placeholder="Stock" name="stock" required />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          required
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addProductPage;

import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>

      <div className={styles.formContainer}>
        <div className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" id="" placeholder="" />

          <label>Price</label>
          <input type="number" name="price" id="" placeholder="230" />

          <label>Stock</label>
          <input type="number" name="stock" id="" placeholder="71" />

          <label>Color</label>
          <input type="text" name="color" id="" placeholder="red" />

          <label>Size</label>
          <input type="text" name="size" id="" placeholder="10" />

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>

          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

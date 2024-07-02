import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>

      <div className={styles.formContainer}>
        <div className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" id="" placeholder="John Doe" />

          <label>Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="johndow@gmail.com"
          />
          <label>Password</label>
          <input type="password" name="password" id="" placeholder="" />

          <label>Phone</label>
          <input type="text" name="phone" id="" placeholder="+123456789" />

          <label>Address</label>
          <textarea type="text" name="address" id="" placeholder="New York" />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;

// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "@/styles/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="profile photo " fill />
        </div>
        Phuc Mai
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Username</label>
          <input type="text" name="username" placeholder="Phuc Mai" />
          <label>Email</label>
          <input type="email" name="email" placeholder="phucmai@email.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="phucmai"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="123 456 789" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="39 Hepscott Terr" />
          <label>Is Admin ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
import ImageComponent from "./imageComp"
import 'react-router-dom'
import { Link } from "react-router-dom"
import { useState } from "react";
import image3 from '../assets/images/download-1.svg'
// import toast from 'react'
import '../assets/css/signup.css'
import { auth, db, createUserWithEmailAndPassword, collection, query, where, getDocs, doc, setDoc } from "../firebase/firebase";

const signupComp=()=>{

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    // Function to check if the name already exists in Firestore
    const checkIfNameExists = async (name: string): Promise<boolean> => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty; // Returns true if name exists
      };

       // Function to handle sign-up
  const handleSignup = async (e: React.FormEvent) => {
    // if (error) {
    // }
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if the name already exists in Firestore
      const nameExists = await checkIfNameExists(name);
      if (nameExists) {
        setError("This name is already taken. Please choose another one.");
        // toast.error('This name is already taken. Please choose another one.')
        setLoading(false);
        return;
      }

      // Create user with email and password in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store the user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        userId: user.uid,
      });

      console.log("User signed up successfully!");
    //   toast.success("User signed up successfully!")

    } catch (error: any) {
      setError(error.message);
    }
    if(error){
    //   toast.error(error)

    }

    setLoading(false);
  };
    return(
    <>
    <section className='signup'>
        <figure>
            <ImageComponent src={image3} alt='BOOK TRACKER' className='signupimage'/>
        </figure>
        <div className='form1'>
        <h3>Save Your Account</h3>
        <p>Open an account to meet other books enthusiasts like you</p>
       
        <form onSubmit={handleSignup}>

            <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} className="border-red-900" required  />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
            <Link to="../pages/sigin">Already have an account?Login</Link>
    </form>
        </div>
    </section>    
    </>
    )
}

export default signupComp
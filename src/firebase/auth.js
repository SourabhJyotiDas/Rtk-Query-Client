import { auth } from "./firebase"

import { GoogleAuthProvider, RecaptchaVerifier, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, updatePassword } from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
}


export const doSignInWithEmailAndPassword = async (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
}


export const doSignInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth, provider);

   console.log("So google dat is", result);
   return result;
}


export const doSignOut = () => {
   return auth.signOut();
}

export const doPasswordReset = (email) => {
   return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {
   // return updatePassword(auth, password);
   const user = auth.currentUser;
   console.log(user);
   updatePassword(user, password).then(() => {
      // Update successful.
      console.log("Updated Successfull");
   }).catch((error) => {
      // An error occurred
      console.log(error);
      // ...
   });
};

export const doSendEmailVerification = () => {
   return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/`
   })
}



// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });


// import { getAuth, updateEmail } from "firebase/auth";
// const auth = getAuth();
// updateEmail(auth.currentUser, "user@example.com").then(() => {
//   // Email updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });



// import { getAuth, deleteUser } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;

// deleteUser(user).then(() => {
//   // User deleted.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });



export const doSIgninWithPhoneNumber = async (phoneNumber) => {

   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
         // reCAPTCHA solved, allow signInWithPhoneNumber.
         // ...
      },
      'expired-callback': () => {
         // Response expired. Ask user to solve reCAPTCHA again.
         // ...
      }
   });
}
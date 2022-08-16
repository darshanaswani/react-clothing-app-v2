import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const onClickHandler = async () => {
    const { user } = await signInWithGooglePopUp();

    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(userDocRef);
  };

  return (
    <div className="sign-in">
      <h1>Sign In Here</h1>
      <button onClick={onClickHandler}>Sign In With GOOGLE</button>
    </div>
  );
};

export default SignIn;

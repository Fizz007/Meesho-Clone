import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0b8e/6422/560a/0f5c/680f/917b/371c/9c0e/907a/803e/803e.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: pink;
  ${mobile({ width: "55%" })}
  ${tab({ width: "55%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgb(239, 96, 120);
  &:hover {
    background-color: rgb(240, 26, 62);
    font-weight: 500;
  }
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Buttong = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  display: flex;
  justify-content:center;
  gap: 10px;
  align-items: center;
  font-size:15px;
  background-color: rgb(239, 96, 120);
  &:hover {
    background-color: rgb(240, 26, 62);
    font-weight: 500;
  }
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [user, setUser] = useState(null);
  const [usser] = useAuthState(auth);
  let [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });
  
  // let [err, seterr] = useState(false);
  // let [errtxt, seterrtxt] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
    console.log("user",userData)
  }, []);
  
  function handleUser() {
    if (!usser) {
      const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
      };
      signInWithGoogle();
      navigate("/");
      console.log("signIn")
    } 
  }
  let handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!value.email || !value.pass) {
      toast.error("Some fields are missing");
    } else if (user && user.email === value.email &&
      user.pass === value.pass
    ) {
      toast.success("LogIn successful", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    }else{
      toast.success("Error", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
      // setValue((prev)=> ({
      //   ...prev,
      //   logInn: true }));
      // localStorage.setItem("user", JSON.stringify(value));

      // navigate("/");
      // console.log("auth")
      // toast.success("Login Sucessful", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    
  };

  function moveToRegister() {
    navigate("/signup");
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
         
          <Input
            className="input"
            name="email"
            required
            type="email"
            placeholder="Enter your mailID"
            value={value.email}
            onChange={handleInputChange}
          />
          <Input
            className="input"
            name="pass"
            type="password"
            required
            placeholder="*******"
            value={value.pass}
            onChange={handleInputChange}
          />

          {/* {err ? <div style={{color: 'red' , font_size: '15px'}}>{errtxt}</div> : null} */}
          <Button onClick={handleSubmit}>LOGIN</Button>
          <Buttong onClick={handleUser}>Login <span>
            <FcGoogle size={25}/>
          </span></Buttong>

          <div className="not-member">
            Not a member? <span onClick={moveToRegister}>Register Now</span>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

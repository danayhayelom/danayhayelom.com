import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
    }
    return(<div>
<input type="text" placeholder="enter username"/>
<input type="password" placeholder="enter password"/>
<button onClick={goToAbout}> Login</button>


    </div>)
}
export default Home
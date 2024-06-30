import "./App.css";
import { Outlet } from 'react-router-dom';
import { Header } from './component/Header';
import Footer from './component/Footer';
import SummaryApi from './common';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function App() {

  const fetchUseDetails = async()=> {
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method: SummaryApi.current_user.method,
      credentials :"include"
    })

    const dataApi = await dataResponse.json()

    console.log("data-user",dataResponse);

  }
  useEffect(()=> {
    fetchUseDetails()
  },[])
  return (
<>
<ToastContainer/>
<Header/>
<main className='min-h-[calc(100vh-120px)]'>
<Outlet/>
</main>
<Footer/>
</>
  );
}

export default App;

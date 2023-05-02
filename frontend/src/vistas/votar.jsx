import { useContext } from 'react';
import { Context } from '../componentes/contexto';

import EnviarVotacion from '../componentes/enviarVotacion';

import ListaCancions from '../componentes/listaCancions';

function Votar  () {
  const [store] = useContext(Context)
  function manexadorBoton () {
    
    window.location.reload()
  }
  function logOut () {
    localStorage.removeItem("token")
    store.setVista("Login")

    
  }
  const cancions = [
    {id: 0,
    pais: "España",
    url:"3iZ43PJMy04"},
    {id: 1,
    pais: "Portugal",
    url: "lvpDLq88cyo"},
    {id: 2,
    pais: "Francia",
    url: "GWfbEFH9NvQ"},
    {id: 3,
    pais: "Alemania",
    url: "Y12_YMs9kCQ"},
    {id: 4,
    pais: "Italia",
    url: "N4HBDAbdXUg"},
    {id: 5,
    pais: "Reino Unido",
    url: "tJ21grjN6wU"},
    {id: 6,
    pais: "Irlanda",
    url: "ak5Fevs424Y"},
    {id: 7,
    pais: "Bélgica",
    url: "ORhEoS6d8e4"},
    {id: 8,
    pais: "Suecia",
    url: "b3vJfR81xO0"},
    {id: 9,
    pais: "Noruega",
    url: "CxNiUxdJnTQ"},
    {id: 10,
    pais: "Paises Bajos",
    url: "UOf-oKDlO6A"},
    {id: 11,
    pais: "Rumanía",
    url: "NRxv-AUCinQ"},
    {id: 12,
    pais: "Azerbayán",
    url: "FLvPB2-2LAc"},
    {id: 13,
    pais: "Croacia",
    url: "AyKj8jA0Qoc"},
    {id: 14,
    pais: "Finlandia",
    url: "znWi3zN8Ucg"},
    {id: 15,
    pais: "Israel",
    url: "r4wbdKmM3bQ"},
    {id: 16,
    pais: "Letonia",
    url: "XRV2-jPqaUw"},
    {id: 17,
    pais: "Malta",
    url: "Apqwl0ayL6A"},
    {id: 18,
    pais: "Moldavia",
    url: "se9LDgFW6ak"},
    {id: 19,
    pais: "Chequia",
    url: "-y78qgDlzAM"},
    {id: 20,
    pais: "Serbia",
    url: "oeIVwYUge8o"},
    {id: 21,
    pais: "Suiza",
    url: "_8-Sbc_GZMc"},
    {id: 22,
    pais: "Albania",
    url: "mp8OG4ApocI"},
    {id: 23,
    pais: "Armenia",
    url: "Co8ZJIejXBA"},
    {id: 24,
    pais: "Australia",
    url: "aqtu2GspT80"},
    {id: 25,
    pais: "Austria",
    url: "ZMmLeV47Au4"},
    {id: 26,
    pais: "Chipre",
    url: "zrFUKqTy4zI"},
    {id: 27,
    pais: "Dinamarca",
    url: "uWs69ddGEW4"},
    {id: 28,
    pais: "Eslovenia",
    url: "zDBSIGITdY4"},
    {id: 29,
    pais: "Estonia",
    url: "wO9g5t3VSuw"},
    {id: 30,
    pais: "Georgia",
    url: "E8kO-QPippo"},
    {id: 31,
    pais: "Grecia",
    url: "qL0EkId_sTY"},
    {id: 32,
    pais: "Islandia",
    url: "BhlJXcCv7gw"},
    {id: 33,
    pais: "Lituania",
    url: "68lbEUDuWUQ"},
    {id: 34,
    pais: "Polonia",
    url: "Jjsl-JCHDWE"},
    {id: 35,
    pais: "San Marino",
    url: "Hjfq-T-8WHw"},
    {id: 36,
    pais: "Ucrania",
    url: "neIscK1hNxs"}
  ]  
  return (
        <>
      <button onClick={logOut}>Cerrar sesión</button>
      <button onClick={manexadorBoton}>Recarga la página</button>
      <ListaCancions cancions={cancions}/>
      <EnviarVotacion/>

    </>
    )
}
export default Votar
import './styles/App.css';
// import {Rocket} from 'lucide-react'

import { Outlet } from "react-router-dom"


// import * as S from "./styles/App.tsx"

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;

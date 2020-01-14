import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'));

// import Primeiro from './componentes/Primeiro';
// ReactDOM.render(<Primeiro/>, document.getElementById('root'));

// import BoaNoite from './componentes/BomDia';
// ReactDOM.render(<BoaNoite  nome="Alan" />, document.getElementById('root'));

// import { BoaTarde, BoaNoite } from './componentes/Multiplos';
// ReactDOM.render(
    //     <div>
//         <BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>
// , document.getElementById('root'));

// import Multi from './componentes/Multiplos';
// ReactDOM.render(
//         <div>
//         <Multi.BoaTarde nome="Ana"/>
//         <Multi.BoaNoite nome="Bia"/>
//     </div>
// , document.getElementById('root'));

// import Saudacao from './componentes/Saudacao';
// ReactDOM.render(<div>
//     <Saudacao tipo="Bom dia" nome="João"/>
// </div>, document.getElementById('root'));

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';
ReactDOM.render(<div>
    {/* <Pai nome="Paulo" sobrenome="Silva"/> */}
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" />
        <Filho nome="Paulo" sobrenome="Silva" />
        <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
</div>, document.getElementById('root'));

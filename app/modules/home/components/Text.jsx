import React from 'react';
import ReactDOM from 'react-dom';

export default class Text extends React.Component {
    render() {
        return(
            <div className="text">
                <div id='f1' className='textBlack'>
                    <p className='f1_1'>Ça, c'est vous.</p>
                </div>
                <div id='f2' className='textBlack'>
                    <p className='f2_1'>Et ça, c'est votre idée.</p>
                </div>
                <div id='f3' className='textBlack'>
                    <p className='f3_1'>Celle qu'on voit aller loin</p>
                </div>
                <div id='f4'>
                    <p className='f4_1'>À conquérir le marché</p>
                    <p className='f4_2'>nord-américain</p>
                </div>
                <div id='f5'>
                    <p className='f5_1'>À parcourir le monde.</p>
                </div>
                <div id='f6'>
                    <p className='f6_1'>Pour y arriver, il faut</p>
                    <p className='f6_2'>un plan solide.</p>
                </div>
                <div id='f7'>
                    <p className='f7'>Vous appuyer avec</p>
                    <p className='f7_1 bold'>notre créativité</p>
                    <p className='f7_2 bold'>notre réseau</p>
                    <p className='f7_3 bold'>nos outils</p>
                    <p className='f7_4 bold'>notre savoir-faire</p>
                </div>
                <div id='f8'>
                    <p className='f8_1'>C'est le truc qui</p>
                    <p className='f8_2'>nous allume.</p>
                </div>
                <div id='f9'>
                    <p className='f9_1'>Pendant qu'on vous aide</p>
                    <p className='f9_2'>à vous faire croître</p>
                </div>
                <div id='f10'>
                    <p className='f10_1'>Vous vous concentrez à faire</p>
                    <p className='f10_2'>ce que vous faites de mieux.</p>
                </div>
                <div id='f11'>
                    <p className='f11_1'>Parce qu'être vu n'est</p>
                    <p className='f11_2'>pas toujours suffisant</p>
                </div>
                <div id='f12'>
                    <p className='f12_1'>Ensemble, on bâtit des</p>
                    <p className='f12_2'>histoires de succès.</p>
                </div>
                <div id='f13'>
                    <p className='f13_1'>Des résultats concrets</p>
                    <p className='f13_2'>et mesurables.</p>
                </div>
                <div id='f14'>
                    <p className='f14_1'>Et c'est <span>ça</span> qui nous rend fier.</p>
                </div>
            </div>
        )
    }
}
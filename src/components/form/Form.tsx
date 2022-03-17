import React, {useState} from 'react';
import style from './Form.module.scss'
import Foto1 from './1.jpg'
import Foto2 from './2.jpg'
import Foto3 from './3.jpg'
import Foto4 from './4.jpg'

function Form() {

     const [altura, setAltura] = useState('')
     const [largura, setLargura] = useState('')
     const [category, setCategory] = useState('')
     const [resultFinal, setResultFinal] = useState('')
     const [message, setMessage] = useState('')
     
    function handleChange (e:any) {
     e.preventDefault();
     let result: any = 0;
     let soma = parseInt(altura) + parseInt(largura)
     let secondCalc = soma * 15
    
     let type:string = category

     if(type === 'Minimalista') {
        result = Math.round(secondCalc * 1.16)
        setResultFinal(result)
        setMessage('')
       }
       else if(type === 'single_line') {
        result = Math.round(secondCalc * 0.85);
        setResultFinal(result)
        setMessage('')
       }
       else if(type === 'black_work') {
        result = Math.round(secondCalc * 1.25);
        setResultFinal(result)
        setMessage('')
       }
       else if(type === 'oldschool') {
        result = Math.round(secondCalc * 1.20);
        setResultFinal(result)
        setMessage('')
       }
       else if(type === 'Selecione') {
       let mensagem = '*Selecione um tipo*'
       setMessage(mensagem)
       }  
     } 
   
    return (
        <section className={style.container}>
       
            <div  className={style.items_wraper} data-testid="apresentation-element">
                <h1>Últimos trabalhos</h1>
           <div  id='items' className={style.items}>
               <div className={style.item}><img src={Foto1} /></div>
               <div className={style.item}><img src={Foto2} /></div>
               <div className={style.item}><img src={Foto3} /></div>
               <div className={style.item}><img src={Foto4} /></div>
           </div>
       </div>

        <form id="form" onSubmit={handleChange} className={style.form} data-testid="form-element">
            <h1 className={style.titulo} >Calcule seu orçamento agora</h1>
            <label htmlFor="tipos" className={style.label}>Selecione o tipo de tatuagem</label>
            <select name="tipos" id="tipos" className={style.tipos}  onChange={(e)=> setCategory(e.target.value)} >
                <option value="Selecione"  >Selecione</option>
                <option className={style.minimalista} value="Minimalista">Minimalista</option>
                <option className={style.single_line} value="single_line">Single Line</option>
                <option className={style.blackwork} value="black_work">Black Work</option>
                <option className={style.oldschool} value="oldschool">Old School</option>
            </select>
        
        <div className={style.box}>
            <label htmlFor="altura" className={style.label}>Insira a altura(cm):</label>
            <input type="number" id="altura" onChange={(e) => setAltura(e.target.value)} />
        </div>

        <div className={style.box}>
            <label htmlFor="largura" className={style.label}>Insira a largura(cm):</label>
            <input type="number" id="largura"  onChange={(e) => setLargura(e.target.value)} />
        </div>

             <button type="submit" id="button" className={style.button}>Calcular</button>
             <div className={style.resultado}>Valor Total: R$ {resultFinal}  <span className={style.comprar}>Comprar</span></div>
             <div className={style.aviso} >{message} </div>
        </form>

        </section> 
    );
}

export default Form;

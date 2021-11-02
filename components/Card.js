import React, { useRef } from 'react';
import Image from 'next/image'
//import { exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

const ComponentToPrint = React.forwardRef((props, ref) => {
    console.log("Props:",props);
    console.log("Ref:",ref);
    let fill = (Math.pow(2, props.lvl) * 100 / 2);
    console.log(fill);
    fill =  (props.exp - fill)/fill*100; // some math to fill the experience bar.
    let color = props.attrib || "strength";
    let image = `${(props.race).charAt(0)}_${(props.class).slice(0,3)+props.avatar}.png`;
    require('../public/img/'+image);
    return (
    <div className="card" ref={ref}>
            <Image className="card__img" src={"/img/"+image} alt="class image" width="150%" height="150%"/>
            <span className={"card__lvl " + color}><span className="card__lvl--no">{props.lvl || 0}</span></span>
            <div className="card__proBar">
                <div className={"card__proBar--fill " + color} style={{ width: fill + "%" }}></div>
            </div>
            <h3>{props.name || "NoName"}</h3>
            <div className="card__class">
                Class: {props.class || "fighter" }
            </div>
            <div className="card__table">
                <div className={"card__table--head " + color}>
                    <span>Dmg</span>
                    <span>Crit</span>
                    <span>Magic</span>
                </div>
                <div className="card__table--body">
                    <span>{props.damage}</span>
                    <span>{props.crit}</span>
                    <span>{props.magic}</span>
                </div>
                <div className={"card__table--head gray"}>
                    <span>HP</span>
                    <span>Armor</span>
                    <span>Mana</span>
                </div>
                <div className="card__table--body">
                    <span>{props.health}</span>
                    <span>{props.armor}</span>
                    <span>{props.mana}</span>
                </div>

                <div className={"card__table--head gray"}>
                    <span>Pow</span>
                    <span>Agility</span>
                    <span>Intel</span>
                </div>
                <div className="card__table--body">
                    <span>{props.strength}</span>
                    <span>{props.agility}</span>
                    <span>{props.intelligence}</span>
                </div>
            </div>
        </div>
    )}
  );

const Card = (props) => {  
    const componentRef = useRef();
    //const exportPNG = exportComponentAsPNG(componentRef, { html2CanvasOptions: {backgroundColor: null}});  
    return (
        <React.Fragment>
        <ComponentToPrint ref={componentRef} {...props}/>
        <button href="#" onClick="">Export as PNG</button>
        </React.Fragment>
    );
}
export default Card;
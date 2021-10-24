import React from 'react';




const Card = (props) => {
    let fill = (Math.pow(2, props.lvl) * 100 / 2);
    fill =  (props.exp - fill)/fill*100; // some math to fill tht experience bar.
    let color = props.attrib || "strength";
    let image = `${(props.race).charAt(0)}_${(props.class).slice(0,3)+props.avatar}.png`;
    let img = require('../public/img/'+image);
    
    return (
        <div className="card">
            <img className="card__img" src={"/img/"+image} alt="warrior" />
            <span className={"card__lvl " + color}><span className="card__lvl--no">{props.lvl || 0}</span></span>
            <div className="card__proBar">
                <div className={"card__proBar--fill " + color} style={{ width: fill + "%" }}></div>
            </div>
            <h3>{props.name || "Fighter"}<span>{" the " + props.class || "Warrior"}</span></h3>
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
    )
}
export default Card;
const Button = ({text}:{text : string}) => {
    // if(!text){
    //     text ="submit"
    // }
    return <button className="bg-blue-400">{text}</button>;
}

export default Button
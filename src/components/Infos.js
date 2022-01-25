function Infos(props){
    const {value, type} = props
    if(type === 'sugar'){
        return (
            <div>
                Le taux de sucre est de : {value}
            </div>
        )
    } else {
        return (
            <div>
                Le taux d'amertume est de : {value}
            </div>
        )
    }
}
export default Infos
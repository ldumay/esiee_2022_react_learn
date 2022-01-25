function Tarif(){
    const currentTime = new Date().getHours()
    const isHappyHour = currentTime > 17 && currentTime < 20
    // Possible : const isHappyHour = 20 > currentTime > 17

    const tarif = isHappyHour ? (
        <div>C'est l'Happy Hour !</div>
    ) : (
        <div>C'est plein pot !</div>
    )

    return tarif
}
export default Tarif
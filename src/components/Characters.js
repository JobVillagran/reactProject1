
export default function Characters(props) {
    const {characters} = props;


    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">Volver al inicio</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                    <span className="alive" />
                                    Alive
                                    </>
                                ) : (
                                    <>
                                    <span className="dead" />
                                    Dead
                                    </>
                                )}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Card () {
    return (
       <div className="card">
           <img className="card_img" src="/public/../img/Off white Jordan.jpeg" alt=""/>
           <div className="card_">
                <h4>Découvrez les Services d'Excellence offert par Smile_Shoes</h4>
                <p>Chez Smile_Shoes, nous nous engageons à redonner vie à vos chaussures préférées en leur offrant un nettoyage méticuleux et des soins spécialisés. Notre passion pour les chaussures se reflète dans chaque paire que nous traitons, et notre gamme de services est conçue pour répondre à tous vos besoins en matière de soins de chaussures.</p>
                <h4>Domaines clés</h4>
                <ul>
                    <li>Services de Nettoyage de Chaussures</li>
                    <li>Cordonnerie Expertise</li>

                </ul>
                <button className="btn">En savoir plus</button>
           </div>
           
       </div>
    )
}

export default Card;
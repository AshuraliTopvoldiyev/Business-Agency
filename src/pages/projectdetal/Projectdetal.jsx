import React from 'react'
import "./Projectdetal.css"
import Product from '../../companents/product/Product'

function Projectdetal() {
    return (
        <>
            <section className="project_detal">
                <div className="hero__project">
                </div>
                <div className="container">
                    <div className="categories">
                        <div className="category">
                            <h2>Category :</h2>
                            <h4>Cloud solution</h4>
                        </div>
                        <div className="category">
                            <h2>Client</h2>
                            <h4>BrightMedia Solutions  </h4>
                        </div>
                        <div className="category">
                            <h2>Date :</h2>
                            <h4>August 23, 2023</h4>
                        </div>
                        <div className="category">
                            <h2>Location:</h2>
                            <h4>489 Depot Road Midland</h4>
                        </div>

                    </div>
                    <div className="cotegory_info">
                        <h2> 01. The Challenge</h2>
                        <p>When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                        <h2>02. The Solution </h2>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. <br /> <br /> <span>One who avoids a pain that produces no resultant pleasure.
                            laborious physical exercise.
                            One who avoids a pain that produces no resultant
                            which of us ever undertakes laborious
                            Avoids pleasure itself, because it is.</span></p>
                        <h2>03. The Result</h2>
                        <p>Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" <br /> <br /> When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>

                    </div>
                    <div className="category_imgs">
                        <img src="/img/categoryimg1.png" alt="" />
                        <img src="/img/categoryimg2.png" alt="" />
                        <img src="/img/categoryimg3.png" alt="" />
                    </div>
                    <div className="recent_project">
                        <h1>Recent Projects </h1>
                        <div className="recent_card">
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projectdetal

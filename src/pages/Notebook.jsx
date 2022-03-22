import React from 'react'

const Notebook = () => {
  return (
    
    <div>
    <section className='container'>
      <p className='quote'>With organization comes empowerment</p>
      <div className='para3'></div>
    </section>
    <h1 className='categ'>Journals</h1>
    {/* <!--Products (Notebooks) --> */}
    <main className='maincon'>
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="/images/notebook_r.jpeg"/>
          <div className='overlay'>
            <h1>2022-2023 Planner</h1>
            <p className='description'>Full year calender with flower cover.</p>
          </div>
        </div>

        <p className='price'>
          $9.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--NEXT product --> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="/images/planner 999.jpeg" />
          <div className='overlay'>
            <h1>2022-2023 Planner</h1>
            <p className='description'>Full year planner with pinapple image.</p>
          </div>
        </div>

        <p className='price'>
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product --> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/Notebook_3.jpg" />
          <div className='overlay'>
            <h1>2022-2023 Planner</h1>
            <p className='description'>Full year planner with quotes.</p>
          </div>
        </div>

        <p className='price'>
          $10.75
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/Notebook_4.jpeg" />
          <div className='overlay'>
            <h1>Butterfly Blue</h1>
            <p className='description'>
              1,000 page notebook with beautiful blue Butterfly image.
            </p>
          </div>
        </div>

        <p className='price'>
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!-- Next Product --> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/notebook_102.webp" />
          <div className='overlay'>
            <h1>UP</h1>
            <p className='description'>Notebook: 1,000 pages</p>
          </div>
        </div>

        <p className='price'>
          $11.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/journal111.png" />
          <div className='overlay'>
            <h1>Starfish</h1>
            <p className='description'>Notebook: 1,000 pages</p>
          </div>
        </div>

        <p className='price'>
          $7.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--new row --> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/sunflower journal.png" />
          <div className='overlay'>
            <h1>sunflower</h1>
            <p className='description'>Notebook: 1,000 pages</p>
          </div>
        </div>

        <p className='price'>
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/anynote.webp" />
          <div className='overlay'>
            <h1>Pretty in Pink</h1>
            <p className='description'>Notebook: 90 pages</p>
          </div>
        </div>

        <p className='price'>
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product --> */}
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src="images/snap journal.png" />
          <div className='overlay'>
            <h1>blue moon</h1>
            <p className='description'>
              Fine point 7 set pens. Does not bleed through paper.
            </p>
          </div>
        </div>

        <p className='price'>
          $7.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className='item'>
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/notebook_100.jpeg" />
          <div className="overlay">
            <h1>Pink</h1>
            <p className="description">Notebook: 30 pages</p>
          </div>
        </div>

        <p className="price">
          $10.25
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product --> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/any5.jpeg" />
          <div className="overlay">
            <h1>Classic Elee Set</h1>
            <p className="description">
              Fine point 7 set pens. Does not bleed through paper.
            </p>
          </div>
        </div>

        <p className="price">
          $20.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product --> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/night_journal.png" />
          <div className="overlay">
            <h1>Night</h1>
            <p className="description">Notebook: 100 pages</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
    </main>
    <figure className="example2">
      <img
        alt="notebook_examples"
        className="fig2"
        src="images/journal example 2.jpeg"
      />
    </figure>
    {/* <!--parallax image starts here--> */}
    <section className="conpara">
      <div className="para1"></div>
    </section>
    {/* <!--products (planners)--> */}
    <h1 className="categ">Planners</h1>
    <main className="maincon">
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner flower.png" />
          <div className="overlay">
            <h1>Flor</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--next product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner_2.jpeg" />
          <div className="overlay">
            <h1>Beach</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>

      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner_3.jpeg" />
          <div className="overlay">
            <h1>Lavish</h1>
            <p className="description">Full year 2022-2023 w/ stickers.</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner_4.jpeg" />
          <div className="overlay">
            <h1>Plan</h1>
            <p className="description">Full year 2022-2023- academic planner</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner_5.jpeg" />
          <div className="overlay">
            <h1>Daisy</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $9.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!-- Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/unisex_3.jpg" />
          <div className="overlay">
            <h1>Leather notebook</h1>
            <p className="description">3000 page leather notebook.</p>
          </div>
        </div>

        <p className="price">
          $12.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner111.png" />
          <div className="overlay">
            <h1>reddish</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/pinapple planner.png" />
          <div className="overlay">
            <h1>Pineapple crown</h1>
            <p className="description">1000 pages with stickers in the inside .</p>
          </div>
        </div>

        <p className="price">
          $12.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product --> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" class="nbook" src="images/planner 333.png" />
          <div className="overlay">
            <h1>Pink Spark</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner 444.jpeg" />
          <div className="overlay">
            <h1>School</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $9.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner 777.jpeg" />
          <div className="overlay">
            <h1>Moth U</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner 888.jpg" />
          <div className="overlay">
            <h1>Classic</h1>
            <p className="description">Full year 2022-2023</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
    </main>

    <figure className="example2">
      <img alt="planner_exmaple" className="fig2" src="images/plannerEX1.jpeg" />
      <img alt="planner_exmaple" className="fig2" src="images/plannerEX2.jpeg" />
    </figure>
    {/* <!--Paralax image number two starts here--> */}
    <section className="conpara">
      <div className="para2"></div>
    </section>
    {/* <!--Bullet Jornals --> */}
    <h1 className="categ">Bullet Journals</h1>
    <main className="maincon">
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/bullet_1.jpeg" />
          <div className="overlay">
            <h1>Blassic</h1>
            <p className="description">Sleek Bullet Jornal</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/bullet_2.png" />
          <div className="overlay">
            <h1>Tom Riddle</h1>
            <p className="description">Bullet journal with thin paper</p>
          </div>
        </div>

        <p className="price">
          $12.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/newbullet1.jpeg" />
          <div className="overlay">
            <h1>TAN</h1>
            <p className="description">Bullet journal nude</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section className="item">
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/ANY111.webp" />
          <div className="overlay">
            <h1>Money Green</h1>
            <p className="description">earth green bullet jornal</p>
          </div>
        </div>

        <p className="price">
          $17.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section>
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/planner_3.jpeg" />
          <div className="overlay">
            <h1>lav</h1>
            <p className="description">Bullet jornal with stencils.</p>
          </div>
        </div>

        <p className="price">
          $10.00
          <button>Add to cart</button>
        </p>
      </section>
      {/* <!--Next Product--> */}
      <section>
        <div className="contain1">
          <img alt="notebook" className="nbook" src="images/newbullet2.jpeg" />
          <div className="overlay">
            <h1>Cora</h1>
            <p className="description">Bullet jornal</p>
          </div>
        </div>

        <p className="price">
          $15.00
          <button>Add to cart</button>
        </p>
      </section>
    </main>

    <figure className="example">
      <img alt="notebook_example" class="fig" src="images/ex4.jpeg" />
      <img alt="notebook_example" class="fig" src="images/ex_3.jpg " />
      <img alt="notebook_example" class="fig" src="images/ex.jpeg" />
    </figure>
    <aside className="up">
      <a className="arrowup" href="#"
        ><img alt="arrow_up" src="images/arrow2.png"
      /></a>
      <h1 className="headup">UP</h1>
    </aside>
    </div>
  )
}

export default Notebook
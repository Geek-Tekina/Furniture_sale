import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section className='section about'>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam temporibus, alias sequi itaque iusto omnis iste hic obcaecati, quis, a reiciendis ut dolorem magnam ipsum veritatis in cumque ad.
        <br></br>
        Vel nemo, nisi ad dignissimos soluta ea. Sunt ratione rem, quos fugit tenetur, ipsum eos vitae voluptas, earum praesentium recusandae repellendus odit esse! Excepturi, iure! Ducimus, voluptatibus tenetur? Culpa, nulla!
        Nam itaque fugit quam illum distinctio facilis eveniet quas animi earum illo quia alias doloremque vero autem ipsam quaerat, non voluptatem. Quaerat deserunt, quisquam veniam nisi similique maxime quam pariatur.
        <br></br>
        Accusantium fuga ipsum omnis excepturi sapiente hic atque maxime minus quia vel incidunt provident aperiam illum impedit ducimus natus nesciunt enim rem, explicabo beatae perspiciatis nihil ut. Aliquid, ut reprehenderit?
      </p>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </section>
  );
};
export default About;

import Head from 'next/head';
import Header from '../components/Header';

export default function about() {
  return (
    <section className="about">
      <Head>
        <title>About</title>
        <meta name="description" content="About Disclosing Value" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />

        <meta property="og:title" content="About"></meta>
        <meta property="og:description" content="About Disclosing Value"></meta>
        <meta property="og:image" content="/square.png" />
      </Head>

      <Header textColor="#050505" />
      <div className="spacer"></div>

      <div className="wrapper">
        <h2 className="about-title">
          “Value is always uniquely and <b>phenomenologically</b> determined by the beneficiary”
        </h2>
      </div>
      <div className="wrapper">
        <p>
          {' '}
          Since I wrote my thesis on Aesthetics and value co-creation in a knowledge-intensive business, I have been
          fascinated with how products and technologies become a part of our lives. Since I read “Disclosing New Worlds”
          by Charles Spinosa, Fernando Flores and Hubert L. Dreyfus (1999), which explores the concept of world
          disclosure in the context of entrepreneurship, I have been interested in ontology and lived experiences, and
          its ability to give access to an interpretive lens. My goal is to link that knowledge together with
          technology-based entrepreneurship, value co-creation, and aesthetics, and to explore how knowledge-intensive
          ideas can become meaningful.{' '}
        </p>

        <p>
          Think of a table. If tables did not fit our practices and activities, such as eating or working at a desk, we
          would not encounter tables or desks as meaningful. Rather, they would appear as artefacts which would require
          explanation. But once we become familiar with their use, we become incapable of seeing them as something
          strange. Try to imagine a world without computers - it is almost impossible.
        </p>

        <p>
          {' '}
          Consider the famous example of Apple and Steve Jobs, who is characterized as a visionary who revolutionised
          the computer industry. Through effective and creative marketing, they managed to produce products that
          consumers did not ever imagine being possible. Yet much of this visionary thinking owes to its pioneering of
          iterative customer involvement, by interacting and drawing on customers’ experience throughout the marketing,
          design, and development process. If Apple had not brought the customers into the creative process, the history
          would have looked differently.
        </p>

        <p>
          The example helps paint a picture of the importance of empathy and fostering deeper connections, in order to
          breathe new life into the creative process, developing strong communities, and gaining support from key
          stakeholders. By looking closer at the disclosure of value in technology-based contexts, we can gain insights
          into how new technologies and products become integrated into practice. As with the case of Apple, looking at
          this field may prove fruitful in light of the adoption of participatory design, lean entrepreneurship, and
          other customer-centred approaches to innovation.
        </p>

        <h3>Who is involved?</h3>
        <p>
          {' '}
          I'm Arwin Zendehrokh, and I recently completed my masters at the School of Entrepreneurship in Uppsala. It was
          a great program that allowed me to apply my technical knowledge from my 4-year chemical engineering degree,
          specifically in materials, and integrate it with various aspects of business development.
        </p>
        <p>
          I'm really interested in discussing topics such as aesthetics, value co-creation, knowledge-intensive
          businesses, materials science, deep-tech, and anything in-between.
        </p>
        <p>
          This website was built with NextJS and React, so if you have any questions about that, I'm happy to chat about
          that too.
        </p>
      </div>
    </section>
  );
}

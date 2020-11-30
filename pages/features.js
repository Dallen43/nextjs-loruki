import Layout from "../components/layout";
import Image from "next/image";

export default function Features() {
  return (
    <Layout>
      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">
              Check out the features of Loruki that separate us from the
              competition
            </p>
          </div>
          <div className="nextImg">
            <Image
              src="/server.png"
              alt=""
              width={200}
              height={200}
              layout="fixed"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

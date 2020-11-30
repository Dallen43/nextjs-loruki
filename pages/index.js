import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout>
      {/* Showcase */}
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to
              static websites for individuals. Fill out the form to try a demo
              of our platform
            </p>
            <Link href="/features">
              <a className="btn btn-outline">Read More</a>
            </Link>
          </div>

          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" class="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <FontAwesomeIcon icon={["fas", "server"]} size="3x" />
              <h3>10,349,405</h3>
              <p className="text-secondary">Deployments</p>
            </div>
            <div>
              <FontAwesomeIcon icon={["fas", "upload"]} size="3x" />
              <h3>987 TB</h3>
              <p className="text-secondary">Published</p>
            </div>
            <div>
              <FontAwesomeIcon icon={["fas", "project-diagram"]} size="3x" />
              <h3>2,343,265</h3>
              <p className="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLI */}
      <section className="cli">
        <div className="container grid">
          <div className="nextImg">
            <Image src="/cli.png" alt="" width={3152} height={1072} />
          </div>
          <div className="card">
            <h3>Easy to use, cross-platfrom CLI</h3>
          </div>
          <div className="card">
            <h3>Deploy in seconds</h3>
          </div>
        </div>
      </section>

      {/* Cloud */}
      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Cloud hosting like you've never seen. Fast, efficient and scalable
            </p>
            <Link href="/features">
              <a className="btn btn-dark">Read More</a>
            </Link>
          </div>
          <div className="nextImg">
            <Image src="/cloud.png" alt="" width={768} height={528} />
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            {/* Cannot style the "Image" component directly, and cannot simply add the new "nextImg" class directly to the Image component due to the way Next js renders this out in HTML. Therefore have to wrap every new Image component in a div with a class of nextImg, applying the same stylings that Brad applied to his img components in teh original tutorial */}
            <div className="nextImg">
              <Image src="/logos/node.png" alt="" width={74} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>Python</h4>
            <div className="nextImg">
              <Image src="/logos/python.png" alt="" width={82} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>C#</h4>
            <div className="nextImg">
              <Image src="/logos/csharp.png" alt="" width={82} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <div className="nextImg">
              <Image src="/logos/ruby.png" alt="" width={82} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>PHP</h4>
            <div className="nextImg">
              <Image src="/logos/php.png" alt="" width={110} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>Scala</h4>
            <div className="nextImg">
              <Image src="/logos/scala.png" alt="" width={82} height={80} />
            </div>
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <div className="nextImg">
              <Image src="/logos/clojure.png" alt="" width={82} height={80} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

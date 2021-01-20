import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
});

Router.events.on('routerChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function Home() {
    return (
        <>
        <Head>
            <link rel="stylesheet" type="text/css" href="/public/nprogress.css" />
        </Head>

        <div>
            <h1>Home</h1>

            <Link>
                <lu>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/services">Serviços</a></li>
                </lu>
            </Link>

        </div>

        </>
    );
}

export default Home;
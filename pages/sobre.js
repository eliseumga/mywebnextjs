import Link from 'next/link';

function Sobre() {
    return (
        <div className='page'>
            <h1>Sobre</h1>

            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    );
}

export default Sobre;
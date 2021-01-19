const ServicePage = () => 
    <div className="page">
        <p>Serviços</p>
    </div>

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })
    return { props: {} }
}

export default ServicePage;
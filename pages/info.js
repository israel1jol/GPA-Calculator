import Head from 'next/head'

const info = () => {
    return (
        <>
            <Head>
                <title>How to Calculate CGPA</title>
            </Head>
            <div>
                <article>Your cummulated Grade Point Average is Caclculated by 
                    <p>1.)Multiplying each individaul Grade Score by their associated units. </p>
                    <p>2.)Summing the Weighted Grade Points.</p>
                    <p>3.) Adding the Units for all the courses.</p>
                    <p>4.) Dividing the Sum of the weighted grade points by the total units</p>
                </article>
            </div>
        </>
    )
}

export default info
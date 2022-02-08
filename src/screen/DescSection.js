import React from 'react'
import { useInView } from 'react-intersection-observer';

const DescSection = () => {

    const { ref, inView, entry } = useInView({
        threshold: 1,
    });

    return (
        <>
            <div className="light-article">
            <div
                // className={inView ? "light-article-clone inview" : "light-article-clone"}
                className="light-article-clone inview"
                ref={ref}
            >
                <h1>Self Improvement Just Got A Lot More Rewarding!</h1>
                <p>With Web3 technology, we are able to create businesses and economic structures that used to seem impossible! By utilizing the power of digital assets, proof of ownership and smart contracts we are revolutionizing NFT Utility and Pioneering the future of personal growth! 
                    <br /> 
                    <br />
                    This is only the beginning of our journey to Forge a Future where the people hold the power!
                </p>
            </div>
            </div>
            <div className="light-gradient" />
        </>
    )
}

export default DescSection

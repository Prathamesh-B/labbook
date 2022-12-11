import React from 'react'


const Footer = () => {
    let year: number = new Date().getFullYear();
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-wrap items-baseline justify-center">
                    <span className="mt-2 text-sm font-light text-gray-500">
                        Copyright © {year} @prathamesh.bhalekar
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
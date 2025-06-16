import React from 'react'
import { COMPANIES_LOGO } from '../../utils/helper';

const CompaniesLogo = () => {
    const logos = COMPANIES_LOGO.map((items, i) => {
        return <div key={i}>
            <img src={items.image} alt="image" />
        </div>
    });

    return (
        <div className="flex max-w-[1140px] mx-auto px-3 justify-between pt-[64px] cursor-pointer">
            {logos}
        </div>
    )
}

export default CompaniesLogo
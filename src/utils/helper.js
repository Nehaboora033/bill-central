import energy from '../assets/images/png/1st-energy.png'
import agl from '../assets/images/png/agl.png'
import blue from '../assets/images/png/blue.png'
import dodo from '../assets/images/png/dodo.png'
import origin from '../assets/images/png/origin.png'
import sumo from '../assets/images/png/sumo.png'
import ovo from '../assets/images/png/ovo.png'


import lightbulb from '../assets/images/svg/lightbulb.svg'
import gasStation from '../assets/images/svg/gas-station.svg'
import internet from '../assets/images/svg/internet-explorer.svg'
import bundle from '../assets/images/svg/bundle.svg'

export const COMPANIES_LOGO = [
    {
        image: energy, alt: "energy"
    },
    {
        image: blue, alt: "blue"
    },
    {
        image: dodo, alt: "dodo"
    },
    {
        image: origin, alt: "origin"
    },
    {
        image: ovo, alt: "ovo"
    },
    {
        image: sumo, alt: "sumo"
    },
    {
        image: agl, alt: "agl"
    },
]

export const NAV = [
    { name: 'About' },
    { name: 'how it works' },
    { name: 'services' },
    { name: 'testimonials' },
    { name: 'why us' },
    { name: 'FAQ' }
];

export const ACCORDIAN_DATA = [
    {
        Accordian1: {
            image: lightbulb, alt: "lightbulb",
            header: "Electricity Plan Comparisons",
            content: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider."
        }
    },
    {
        Accordian2: {
            image: gasStation, alt: "gasstation",
            header: "Gas Plan Comparisons",
            content: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
        }
    },
    {
        Accordian3: {
            image: internet, alt: "internet",
            header: "Internet Plan Comparisons",
            content: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider"

        }
    },
    {
        Accordian4: {
            image: bundle, alt: "bundle",
            header: "Bundle Packages",
            content: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider",
        }
    },
]
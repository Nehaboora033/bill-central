import energy from '../assets/images/png/energy.png'
import agl from '../assets/images/png/agl.png'
import blue from '../assets/images/png/blue.png'
import dodo from '../assets/images/png/dodo.png'
import origin from '../assets/images/png/origin.png'
import sumo from '../assets/images/png/sumo.png'
import ovo from '../assets/images/png/ovo.png'

import simplified from '../assets/images/svg/simplified.svg'
import time from '../assets/images/svg/time.svg'
import service from '../assets/images/svg/no-service.svg'
import support from '../assets/images/svg/support.svg'

import switchImage1 from '../assets/images/png/switch-imgfirst.png'
import switchImage2 from '../assets/images/png/switch-imgsecond.png'
import switchImage3 from '../assets/images/png/switch-imgthird.png'
import switchImage4 from '../assets/images/png/switch-imgfourth.png'

import profile1 from '../assets/images/svg/profilefirst.svg'
import profile2 from '../assets/images/svg/profilesecond.svg'
import profile3 from '../assets/images/svg/profilethird.svg'

import star from '../assets/images/svg/stars.svg'

import { LIGHT_BULB, BUNDLE, GAS_STATION, INTERNET_EXPLORER } from './Icons'

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


export const UTILITIES_CARD = [
    {
        icon: simplified,
        title: "Simplified Comparison Process",
        description: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.",
    },
    {
        icon: time,
        title: "Save Time and Money",
        description: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.",
    },
    {
        icon: service,
        title: "No Service Interruptions",
        description: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.",
    },
    {
        icon: support,
        title: "Comprehensive Support",
        description: "Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.",
    }
];

export const FOOTER_LINKS = [
    { name: "About" },
    { name: "How It Works" },
    { name: "Services" },
    { name: "Testimonials" },
    { name: "Why Us" },
    { name: "FAQ" },
];

export const FOOTER_LINKS2 = [
    {
        name: "Privacy Policy",
    },
    {
        name: "Terms of Services",
    },
];
export const SWITCH_DATA = [
    {
        image: switchImage1, alt: "image1",
        title: "1. Enter Your Location and Preferences",
        description: "Complete the process in just a few clicks. We'll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        image: switchImage2, alt: "image2",
        title: "2. Compare Providers",
        description: "Complete the process in just a few clicks. We'll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        image: switchImage3, alt: "image3",
        title: "3. Switch Easily",
        description: "Complete the process in just a few clicks. We'll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        image: switchImage4, alt: "image4",
        title: "4. Choose the Best Plan",
        description: "Complete the process in just a few clicks. We'll handle the rest and ensure a smooth transition to your new provider.",
    },


];

export const COMPARISONS_ACCORDIAN = [

    {
        image: LIGHT_BULB,
        question: "Electricity Plan Comparisons",
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },
    {
        image: GAS_STATION,
        question: "Gas Plan Comparisons",
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",

    },
    {
        image: INTERNET_EXPLORER,
        question: "Internet Plan Comparisons",
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },
    {
        image: BUNDLE,
        question: "Bundle Packages",
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },

];

export const TESTIMONIALS_SLIDER = [
    {
        image: profile1,
        name: "Cameron",
        handle: "@cameron",
        rating: star,
        content: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
    },
    {
        image: profile2,
        name: "Ronald",
        handle: "@ronald",
        rating: star,
        content: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
    },
    {
        image: profile3,
        name: "Jay Shah",
        handle: "@jayshah",
        rating: star,
        content: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
    },
];


export const FAQ_DATA = [
    {
        question: "Can I switch providers if I'm currently in a contract?",
        answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        question: "Will my service be interrupted if I switch providers?",
        answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",

    },
    {
        question: "How long does it take to switch providers?",
        answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        question: "Is there a fee for switching providers?",
        answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },

];

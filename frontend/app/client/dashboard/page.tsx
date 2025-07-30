"use client"
import Script from 'next/script';
import React from 'react';
import '@/app/styles/swiper-bundle.min.css';

const DashboardPage = () => {
    return (
        <div className='bg-white relative z-10'>
            <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
            <Script src="/js/scrollreveal.min.js" strategy="afterInteractive" />
            <Script src="/js/main.js" strategy="afterInteractive" />
            {/* header */}
            <header className="py-8 lg:pt-6 lg:pb-14">
                <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4  lg:gap-y-0">
                    <div className="flex justify-center lg:justify-normal">
                        <a href="#">
                            <img src="/images/header/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
                        {/* location */}
                        <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                            <i className="ri-map-pin-2-fill text-2xl text-accent"></i>
                            <div className='text-secondary'>123 Arling, Miola, Ny</div>
                        </div>

                        {/* phone */}
                        <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                            <i className="ri-phone-fill text-2xl text-accent"></i>
                            <div className='text-secondary'>(+62) 812523 75524</div>
                        </div>

                        {/* btn */}
                        <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0 '>
                            Book now
                        </button>

                        {/* mobile nav */}
                        <nav className='mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20'>
                            {/* nav trigger btn */}
                            <div className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg  rounded-br-lg cursor-pointer transition-all'>
                                <i className="mnav__close-btn-icon ri-arrow-right-s-line text-2xl text-white"></i>
                            </div>

                            {/* logo, list, form */}
                            <div className='px-12 flex flex-col gap-y-12 h-full'>
                                {/* logo */}
                                <a href="#">
                                    <img src="/images/header/logo.svg" alt="" />
                                </a>
                                {/* list */}
                                <ul className='flex flex-col gap-y-5'>
                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Home</a>
                                    </li>

                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Doctors</a>
                                    </li>

                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Departement</a>
                                    </li>

                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Services</a>
                                    </li>

                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Blog</a>
                                    </li>

                                    <li>
                                        <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Contact</a>
                                    </li>
                                </ul>
                                {/* form */}
                                <form className='relative flex gap-x-[10px]'>
                                    <label htmlFor="mnav-search-input">
                                        <i className="ri-search-line text-2xl text-accent"></i>
                                    </label>
                                    <input type="text" id="mnav-search-input" placeholder='Search...'
                                        className='outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic' />
                                </form>
                            </div>
                        </nav>
                        {/* desktop nav */}
                        <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px] '>
                            {/* list */}
                            <ul className='flex gap-x-4'>
                                <li>
                                    <a href="#" className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>Home</a>
                                </li>

                                <li>
                                    <a href="#" className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>Doctors</a>
                                </li>

                                <li>
                                    <a href="#" className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>Departement</a>
                                </li>

                                <li>
                                    <a href="#" className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>Services</a>
                                </li>

                                <li>
                                    <a href="#" className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>Blog</a>
                                </li>

                                <li>
                                    <a href="#" className='text-secondary hover:text-accent transition-all duration-300'>Contact</a>
                                </li>
                            </ul>
                            {/* form */}
                            <form className='relative flex gap-x-[10px]'>
                                <label htmlFor="search-input" className='flex  justify-center items-center group '>
                                    <i className="ri-search-line text-2xl text-accent"></i>
                                </label>
                                <input type="text" id='search-input' placeholder='Search...'
                                    className='outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150 ' />
                            </form>
                        </nav>
                    </div>
                </div>
            </header>
            {/* hero */}
            <section className='hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden'>
                <div className='container mx-auto h-full'>
                    {/* text image */}
                    <div className='flex  flex-col xl:flex-row items-center justify-between h-full'>
                        {/* text */}
                        <div className='hero__text xl:w-[48%] text-center xl:text-left'>
                            {/* badge */}
                            <div className='flex  items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0'>
                                {/* badge icon */}
                                <i className="ri-heart-pulse-line text-2xl text-accent"></i>
                                <div className='uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]'>Live your life</div>
                            </div>
                            {/* title */}
                            <h1 className='h1 mb-6 '>We care about your health</h1>
                            {/* desc */}
                            <p className='mb-[42px] md:max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea quia veniam necessitatibus expedita dolor eos quae nobis, iusto inventore Lorem, ipsum dolor sit amet.</p>
                            {/* btn */}
                            <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Contact Us</button>
                        </div>
                        {/* image */}
                        <div className='hero__img hidden xl:flex max-w-[814px] self-end'>
                            <img src="/images/hero/BG2.png" alt="" className='w-[700px]'/>
                        </div>
                    </div>
                </div>
            </section>
            {/* end hero */}

            {/* stats */}
            <section className='stats section'>
                <div className="container mx-auto">
                    {/* wrapper */}
                    <div className='flex flex-col xl:flex-row gap-y-6 justify-between'>
                        {/* item */}
                        <div className='stats__item flex-1 border-r flex flex-col items-center'>
                            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>+5120</div>
                            <div>Happy Patients</div>
                        </div>
                        {/* item */}
                        <div className='stats__item flex-1 border-r flex flex-col items-center'>
                            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>26</div>
                            <div>Total Branches</div>
                        </div>
                        {/* item */}
                        <div className='stats__item flex-1 border-r flex flex-col items-center'>
                            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>+53</div>
                            <div>Senior Doctors</div>
                        </div>
                        {/* item */}
                        <div className='stats__item flex-1 flex flex-col items-center'>
                            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>+10</div>
                            <div>Year Experience</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end stats */}

            {/* services */}
            <section className='services'>
                {/* bg */}
                <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 h-[368px] relative flex items-center xl:items-start -z-10'>
                    <div className='container mx-auto'>
                        {/* text */}
                        <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px]'>
                            <h2 className='h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>Our best services for your solution</h2>
                            <p className='text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis dicta accusamus suscipit libero, voluptas consectetur natus neque exercitationem laborum soluta quaerat, delectus ipsa mollitia vel, labore illum quia</p>
                        </div>
                    </div>
                </div>
                {/* grid container */}
                <div className="container mx-auto mt-8 xl:-mt-[144px]">
                    {/* grid */}
                    <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
                        {/* grid item */}
                        <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex  flex-col items-center text-center'>
                            {/* grid item icon */}
                            <div>
                                <img src="/images/services/icon/1.png" alt="" />
                            </div>
                            {/* grid item title */}
                            <h3 className='h3 mb-[10px]'>General Practitioners</h3>
                            {/* grid item description */}
                            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        {/* grid item */}
                        <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex  flex-col items-center text-center'>
                            {/* grid item icon */}
                            <div>
                                <img src="/images/services/icon/2.png" alt="" />
                            </div>
                            {/* grid item title */}
                            <h3 className='h3 mb-[10px]'>Pregnancy Support</h3>
                            {/* grid item description */}
                            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        {/* grid item */}
                        <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex  flex-col items-center text-center'>
                            {/* grid item icon */}
                            <div>
                                <img src="/images/services/icon/3.png" alt="" />
                            </div>
                            {/* grid item title */}
                            <h3 className='h3 mb-[10px]'>Nutritional Support</h3>
                            {/* grid item description */}
                            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        {/* grid item */}
                        <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex  flex-col items-center text-center'>
                            {/* grid item icon */}
                            <div>
                                <img src="/images/services/icon/4.png" alt="" />
                            </div>
                            {/* grid item title */}
                            <h3 className='h3 mb-[10px]'>Pharmaceutical Care</h3>
                            {/* grid item description */}
                            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end services */}

            {/* oppointment */}
            <section className='oppointment section'>
                <div className='container mx-auto'>
                    {/* title */}
                    <h2 className='appointment__title h2  mb-5 xl:mb-[50px] text-center xl:text-left'>
                        Book Appointment or call:
                        <span className='text-accent-tertiary'>(+62)8125 2375524</span>
                    </h2>
                    {/* form */}
                    <form className='appointment__form flex flex-col gap-y-5'>
                        {/* select wrapper */}
                        <div className='flex flex-col xl:flex-row gap-5'>
                            {/* select 1 */}
                            <div className='select relative flex items-center'>
                                <div className='absolute right-4'>
                                    <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                </div>
                                {/* select */}
                                <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                                    <option value="1">Select departement</option>
                                    <option value="2">Departement 1</option>
                                    <option value="3">Departement 2</option>
                                    <option value="4">Departement 3</option>
                                </select>
                            </div>
                            {/* select 2 */}
                            <div className='select relative flex items-center'>
                                <div className='absolute right-4'>
                                    <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                </div>
                                {/* select */}
                                <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                                    <option value="1">Select Doctors    </option>
                                    <option value="2">Dr. John Doe</option>
                                    <option value="3">Dr. Jane Doe</option>
                                    <option value="4">Bob Smith</option>
                                </select>
                            </div>
                        </div>
                        {/* input wrapper */}
                        <div className='flex flex-col  xl:flex-row gap-5'>
                            <input type="text" className='input' placeholder='Full Name' />
                            <input type="text" className='input' placeholder='Phone Number' />
                        </div>
                        {/* input wrapper */}
                        <div className='flex flex-col  xl:flex-row gap-5'>
                            <input className='input' type='date' />
                            <input className='input' type='time' />
                        </div>
                        {/* btn */}
                        <button className='btn btn-lg btn-accent self-start' type='submit'>
                            Book Appointment
                        </button>
                    </form>
                </div>
            </section>
            {/* end oppointment */}

            {/* testimonials */}
            <section className='testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0'>
                <div className='testimonial__constainer container mx-auto'>
                    <div className='flex flex-col item-center gap-x-14 xl:flex-row'>
                        {/* img */}
                        <div className='hidden xl:flex'>
                            <img src="/images/testimonials/img.png" alt="" />
                        </div>
                        {/* slider */}
                        <div className='max-w-[98%] xl:max-w-[710px] xl:mt-16'>
                            {/* <!-- Slider main container --> */}
                            <div className="swiper h-[400px]">
                                {/* <!-- Additional required wrapper --> */}
                                <div className="swiper-wrapper">
                                    {/* <!-- Slide 1 --> */}
                                    <div className="swiper-slide">
                                        <div className='h-full flex flex-col justify-center items-start'>
                                            <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                                                {/* message */}
                                                <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] 
                                            text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom 
                                            before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat 
                                            after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
                                            after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                                                    {/* message */}
                                                    <span className='mx-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sapiente impedit recusandae eum velit tempora quod quasi iste cupiditate
                                                        sed sequi tenetur consectetur, deleniti doloremque corrupti autem rerum eu</span>
                                                </p>
                                                {/* name */}
                                                <div className='text-[26px] text-[#4c5354] font-semibold'>
                                                    James Rodrigo
                                                </div>
                                                {/* job */}
                                                <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Slide 2 --> */}
                                    <div className="swiper-slide">
                                        <div className='h-full flex flex-col justify-center items-start'>
                                            <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                                                {/* message */}
                                                <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] 
                                            text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom 
                                            before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat 
                                            after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
                                            after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                                                    {/* message */}
                                                    <span className='mx-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sapiente impedit recusandae eum velit tempora quod quasi iste cupiditate
                                                        sed sequi tenetur consectetur, deleniti doloremque corrupti autem rerum eu</span>
                                                </p>
                                                {/* name */}
                                                <div className='text-[26px] text-[#4c5354] font-semibold'>
                                                    Pedri Monderto
                                                </div>
                                                {/* job */}
                                                <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Slide 3 --> */}
                                    <div className="swiper-slide">
                                        <div className='h-full flex flex-col justify-center items-start'>
                                            <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                                                {/* message */}
                                                <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%] 
                                            text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom 
                                            before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat 
                                            after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
                                            after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                                                    {/* message */}
                                                    <span className='mx-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sapiente impedit recusandae eum velit tempora quod quasi iste cupiditate
                                                        sed sequi tenetur consectetur, deleniti doloremque corrupti autem rerum eu</span>
                                                </p>
                                                {/* name */}
                                                <div className='text-[26px] text-[#4c5354] font-semibold'>
                                                    James Kalson
                                                </div>
                                                {/* job */}
                                                <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ...
                                </div>
                                {/* <!-- Swiper pagination --> */}
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end testimonials */}

            {/* team */}
            <section className='team section'>
                <div className="container mx-auto">
                    {/* title */}
                    <h2 className='team__title h2 mb-[50px] text-center xl:text-left'>
                        Our Team
                    </h2>
                    {/* slider */}
                    <div className='team__slider swiper min-h-[400px]'>
                        {/* <!-- Additional required wrapper --> */}
                        <div className="swiper-wrapper">
                            {/* <!-- Slide 1 --> */}
                            <div className="swiper-slide">
                                <div className='flex flex-col md:flex-row gap-9'>
                                    {/* item */}
                                    <div className='flex-1 flex flex-col xl:flex-row'>
                                        <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                                            {/* img */}
                                            <div className='flex-1'>
                                                <img src="/images/team/doctor-1.png" alt="" />
                                            </div>
                                            {/* info */}
                                            <div className='flex-1 flex flex-col'>
                                                {/* name */}
                                                <h4 className='h4 mb-[10px]'>Dr. Lesley Taylor</h4>
                                                {/* job */}
                                                <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]'>Pediatrician</div>
                                                {/* description */}
                                                <p className='font-light mb-[26px] max-w-[320px]'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Veniam nisi aspernatur adipisci!
                                                </p>
                                                {/* social */}
                                                <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-facebook-circle-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-youtube-fill"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className='flex-1 flex flex-col xl:flex-row'>
                                        <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                                            {/* img */}
                                            <div className='flex-1'>
                                                <img src="/images/team/doctor-2.png" alt="" />
                                            </div>
                                            {/* info */}
                                            <div className='flex-1 flex flex-col'>
                                                {/* name */}
                                                <h4 className='h4 mb-[10px]'>Dr. Zachary Brown</h4>
                                                {/* job */}
                                                <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]'>Cardiologist</div>
                                                {/* description */}
                                                <p className='font-light mb-[26px] max-w-[320px]'>
                                                    Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.
                                                </p>
                                                {/* social */}
                                                <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-facebook-circle-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-youtube-fill"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 2 --> */}
                            <div className="swiper-slide mb-10">
                                <div className='flex flex-col md:flex-row gap-9'>
                                    {/* item */}
                                    <div className='flex-1 flex flex-col xl:flex-row'>
                                        <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                                            {/* img */}
                                            <div className='flex-1'>
                                                <img src="/images/team/doctor-1.png" alt="" />
                                            </div>
                                            {/* info */}
                                            <div className='flex-1 flex flex-col'>
                                                {/* name */}
                                                <h4 className='h4 mb-[10px]'>Dr. Lesley Taylor</h4>
                                                {/* job */}
                                                <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]'>Pediatrician</div>
                                                {/* description */}
                                                <p className='font-light mb-[26px] max-w-[320px]'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Veniam nisi aspernatur adipisci!
                                                </p>
                                                {/* social */}
                                                <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-facebook-circle-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-youtube-fill"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className='flex-1 flex flex-col xl:flex-row'>
                                        <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                                            {/* img */}
                                            <div className='flex-1'>
                                                <img src="/images/team/doctor-1.png" alt="" />
                                            </div>
                                            {/* info */}
                                            <div className='flex-1 flex flex-col'>
                                                {/* name */}
                                                <h4 className='h4 mb-[10px]'>Dr. Lesley Taylor</h4>
                                                {/* job */}
                                                <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]'>Pediatrician</div>
                                                {/* description */}
                                                <p className='font-light mb-[26px] max-w-[320px]'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Veniam nisi aspernatur adipisci!
                                                </p>
                                                {/* social */}
                                                <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-facebook-circle-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                    <a href="#" className='cursor-pointer hover:text-accent transition-all'>
                                                        <i className="ri-youtube-fill"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Swiper pagination --> */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            {/* end team */}

            {/* faq */}
            <section className='faq items-center'>
                <div className="container mx-auto">
                    <h2 className='faq__title h2 text-center mb-[50px] '>We've got answer</h2>
                    {/* /item wrapper */}
                    <div className='max-w-5xl mx-auto'>
                        {/* item */}
                        <div className='faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none'>
                            {/* title & icon */}
                            <div className='flex items-center justify-between mb-[10px]'>
                                <h4 className='h4'>Why to belive insolve medical healthcare ?</h4>
                                {/* icon */}
                                <div className='faq__btn text-accent'>
                                    <i className="ri-add-fill text-2xl"></i>
                                </div>
                            </div>
                            {/* answer text */}
                            <div className='faq__answer h-0 overflow-hidden'>
                                <p className='font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Saepe iure animi, in maiores quasi nesciunt quas repudiandae sint assumenda
                                    veritatis nulla nisi. Impedit excepturi alias sint similique sapiente, autem amet?
                                </p>
                            </div>
                        </div>
                        {/* item */}
                        <div className='faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none'>
                            {/* title & icon */}
                            <div className='flex items-center justify-between mb-[10px]'>
                                <h4 className='h4'>Will we get healthcare update after surgery ?</h4>
                                {/* icon */}
                                <div className='faq__btn text-accent'>
                                    <i className="ri-add-fill text-2xl"></i>
                                </div>
                            </div>
                            {/* answer text */}
                            <div className='faq__answer h-0 overflow-hidden'>
                                <p className='font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Saepe iure animi, in maiores quasi nesciunt quas repudiandae sint assumenda
                                    veritatis nulla nisi. Impedit excepturi alias sint similique sapiente, autem amet?
                                </p>
                            </div>
                        </div>
                        {/* item */}
                        <div className='faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none'>
                            {/* title & icon */}
                            <div className='flex items-center justify-between mb-[10px]'>
                                <h4 className='h4'>What preperation are necessary undergoing surgery ?</h4>
                                {/* icon */}
                                <div className='faq__btn text-accent'>
                                    <i className="ri-add-fill text-2xl"></i>
                                </div>
                            </div>
                            {/* answer text */}
                            <div className='faq__answer h-0 overflow-hidden'>
                                <p className='font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Saepe iure animi, in maiores quasi nesciunt quas repudiandae sint assumenda
                                    veritatis nulla nisi. Impedit excepturi alias sint similique sapiente, autem amet?
                                </p>
                            </div>
                        </div>
                        {/* item */}
                        <div className='faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none'>
                            {/* title & icon */}
                            <div className='flex items-center justify-between mb-[10px]'>
                                <h4 className='h4'>How long will it take to recover after the surgery ?</h4>
                                {/* icon */}
                                <div className='faq__btn text-accent'>
                                    <i className="ri-add-fill text-2xl"></i>
                                </div>
                            </div>
                            {/* answer text */}
                            <div className='faq__answer h-0 overflow-hidden'>
                                <p className='font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Saepe iure animi, in maiores quasi nesciunt quas repudiandae sint assumenda
                                    veritatis nulla nisi. Impedit excepturi alias sint similique sapiente, autem amet?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end faq */}

            {/* departemen */}
            <section className='departements section'>
                <div className='departements__bg bg-departements bg-cover xl:bg-auto bg-center 
                bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 
                xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center'>

                    <div className='departemens__container container mx-auto'>
                        <div className='flex flex-col xl:flex-row gap-y-5'>
                            <div className='xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px] 
                            font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7]
                            xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0'>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Laboratory Analysis
                                </div>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Caridology Clinic
                                </div>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Gynecology Clinic
                                </div>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Pathology Clinic
                                </div>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Pediatrics Clinic
                                </div>
                                <div className='cursor-pointer hover:text-accent transition-all'>
                                    Neurology Clinic
                                </div>
                            </div>
                            <div className='xl:w-[640px]'>
                                {/* title */}
                                <h2 className='h2 mb-[20px] text-center xl:text-left'>Cardiology Clinic</h2>
                                {/* description */}
                                <p className='mb-[30px] font-light text-center xl:text-left'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam inventore tenetur,
                                    autem dolore incidunt dignissimos, saepe ut officiis quod sapiente optio culpa vel asperiores,
                                    <br /><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat error!
                                    Nam laudantium obcaecati voluptatibus sint nisi harum, repellendus voluptates modi at
                                </p>
                                <div className='flex flex-col xl:flex-row items-center xl:justify-between
                                max-w-[555px] mb-[50px] mx-auto xl:mx-0'>
                                    <div className='text-accent xl:border-r border-[#dcdcdc] xl:pr-6'>Neurocritical Care</div>
                                    <div className='text-accent xl:border-r border-[#dcdcdc] xl:pr-6'>Neuro Oncology</div>
                                    <div className='text-accent'>Geriatric Neurology</div>
                                </div>
                                <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end departemen */}

            {/* blog */}
            <section className="blog">
                <div className="container mx-auto">
                    <h2 className='blog__title h2 mb-[50px] text-center xl:text-left'>
                        Our Recents Posts
                    </h2>
                    {/* blog post */}
                    <div className='flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]'>
                        {/* post 1 */}
                        <div className='blog__post max-w-[420px] shadow-custom2 rounded-[20px] overflow-hidden cursor-pointer group'>
                            {/* img */}
                            <div className='relative overflow-hidden'>
                                <img className='group-hover:scale-110 transition-all duration-500'
                                    src="/images/blog/img-1.png"
                                    alt="" />
                                {/* badge */}
                                <div className='bg-accent-tertiary absolute bottom-0 left-0 text-white text-base 
                                tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]'>Medical</div>
                            </div>
                            {/* text */}
                            <div className='px-5 py-6 '>
                                {/* date */}
                                <div className='mb-4'>Jan 2, 2023</div>
                                {/* title */}
                                <h4 className='h4 mb-[10px]'>10 foods to avoid for your heart health</h4>
                                {/* description */}
                                <p className='font-light'>It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                                    condition that’s certainly true...
                                    <a href="" className='italic underline text-[#4c5354]'>Read more</a></p>
                            </div>
                        </div>
                        {/* post 2 */}
                        <div className='blog__post max-w-[420px] shadow-custom2 rounded-[20px] overflow-hidden cursor-pointer group'>
                            {/* img */}
                            <div className='relative overflow-hidden'>
                                <img className='group-hover:scale-110 transition-all duration-500'
                                    src="/images/blog/img-2.png"
                                    alt="" />
                                {/* badge */}
                                <div className='bg-accent-tertiary absolute bottom-0 left-0 text-white text-base 
                                tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]'>Mental Health</div>
                            </div>
                            {/* text */}
                            <div className='px-5 py-6 '>
                                {/* date */}
                                <div className='mb-4'>Jan 3, 2023</div>
                                {/* title */}
                                <h4 className='h4 mb-[10px]'>How to be relax & calm in hard situations</h4>
                                {/* description */}
                                <p className='font-light'>It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                                    condition that’s certainly true...
                                    <a href="" className='italic underline text-[#4c5354]'>Read more</a></p>
                            </div>
                        </div>
                        {/* post 3 */}
                        <div className='blog__post max-w-[420px] shadow-custom2 rounded-[20px] overflow-hidden cursor-pointer group'>
                            {/* img */}
                            <div className='relative overflow-hidden'>
                                <img className='group-hover:scale-110 transition-all duration-500'
                                    src="/images/blog/img-3.png"
                                    alt="" />
                                {/* badge */}
                                <div className='bg-accent-tertiary absolute bottom-0 left-0 text-white text-base 
                                tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]'>Dental</div>
                            </div>
                            {/* text */}
                            <div className='px-5 py-6 '>
                                {/* date */}
                                <div className='mb-4'>Jan 4, 2023</div>
                                {/* title */}
                                <h4 className='h4 mb-[10px]'>10 foods to avoid for your heart health</h4>
                                {/* description */}
                                <p className='font-light'>It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                                    condition that’s certainly true...
                                    <a href="" className='italic underline text-[#4c5354]'>Read more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog */}

            {/* brand */}
            <section className="brands section">
                <div className="container mx-auto">
                    <div className='flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center'>
                        <img className='brands__logo' src="/images/brands/brand-1.png" alt="" />
                        <img className='brands__logo' src="/images/brands/brand-2.png" alt="" />
                        <img className='brands__logo' src="/images/brands/brand-3.png" alt="" />
                        <img className='brands__logo' src="/images/brands/brand-4.png" alt="" />
                        <img className='brands__logo' src="/images/brands/brand-5.png" alt="" />
                    </div>
                </div>
            </section>
            {/* end brand */}

            {/* newslatter */}
            <section className="newsletter bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden ">
                {/* pattern */}
                <div className='absolute left-0 bottom-0'>
                    <img src="/images/newslatter/pattern.png" alt="" />
                </div>
                {/* container */}
                <div className='newslatter__container container mx-auto'>
                    {/* wrapper */}
                    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]'>
                        {/* text */}
                        <div className='flex-1 z-20 text-center md:text-left'>
                            <div className='text-base uppercase text-white tracking-[2.24px] font-medium'>Our Newslatter</div>
                            <h1 className='h1 mb-4 text-white'>Subscribe to get more updates</h1>
                        </div>
                        {/* form */}
                        <form className='flex-1'>
                            <div className='flex flex-col mf:flex-row relative gap-y-4 '>
                                <input type="text" placeholder='Your email' className='rounded-full w-full h-[66px] bg-transparent border-2 
                                border-white outline-none pl-[30px] placeholder:text-white focus:text-white'/>
                                <button className='btn btn-lg btn-white md:absolute right-0'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* end newslatter */}

            {/* footer */}
            <footer className='footer pt-12 xl:pt-[150px]'>
                <div className="container mx-auto pb-12 xl:pb-[100px]">
                    <div className='flex flex-col xl:flex-row gap-x-5 gap-y-10'>
                        {/* footer container section */}
                        <div className='footer__item flex-1'>
                            {/* logo */}
                            <a href="">
                                <img className='mb-[30px]' src="/images/header/logo.svg" alt="" />
                            </a>
                            {/* description */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora!
                            </p>
                            {/* location, email, phone */}
                            <div className='flex flex-col gap-y-3 mb-10'>
                                <div className='flex items-center gap-x-[6px]'>
                                    <i className="ri-map-pin-2-fill text-[24px] text-accent"></i>
                                    <div>123 Airling, miola</div>
                                </div>
                                <div className='flex items-center gap-x-[6px]'>
                                    <i className="ri-mail-fill text-[24px] text-accent"></i>
                                    <div>zidanerosyidi@gmail.com</div>
                                </div>
                                <div className='flex items-center gap-x-[6px]'>
                                    <i className="ri-phone-fill text-[24px] text-accent"></i>
                                    <div>(+62) 8125 2375524</div>
                                </div>
                            </div>
                            {/* social media */}
                            <div className='flex gap-[14px] text-[30px]'>
                                <div className='p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary 
                                hover:text-accent cursor-pointer transition-all'>
                                    <i className="ri-facebook-circle-fill"></i>
                                </div>
                                <div className='p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary 
                                hover:text-accent cursor-pointer transition-all'>
                                    <i className="ri-instagram-line"></i>
                                </div>
                                <div className='p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary 
                                hover:text-accent cursor-pointer transition-all'>
                                    <i className="ri-twitter-x-line"></i>
                                </div>
                                <div className='p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary 
                                hover:text-accent cursor-pointer transition-all'>
                                    <i className="ri-linkedin-box-fill"></i>
                                </div>
                                <div className='p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary 
                                hover:text-accent cursor-pointer transition-all'>
                                    <i className="ri-youtube-fill"></i>
                                </div>
                            </div>
                        </div>
                        {/* footer quick link section */}
                        <div className='footer__item flex-1'>
                            <h4 className='h4 mb-5'>Quick Links</h4>
                            <div className='flex gap-x-5'>
                                {/* list 1 */}
                                <ul className='flex flex-1 flex-col gap-y-5'>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Doctors</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Departement</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Blog</a>
                                    </li>
                                </ul>
                                {/* list 2 */}
                                <ul className='flex flex-1 flex-col gap-y-5'>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Our Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Contact</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Careers</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Faqs</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-accent transition-all'>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* footer opening hours section */}
                        <div className='footer__item flex-1'>
                            <h4 className='h4 mb-5'>opening Hours</h4>
                            {/* list */}
                            <div className='flex flex-col gap-5'>
                                {/* item */}
                                <div className='flex-1'>
                                    <div className='flex justify-between items-center border-b pb-[10px]'>
                                        <div>Monday - Thursday</div>
                                        <div className='text-accent font-medium'>8:00 Am - 6:00 Pm</div>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between items-center border-b pb-[10px]'>
                                        <div>Friday - Saturday</div>
                                        <div className='text-accent font-medium'>10:00 Am - 4:00 Pm</div>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between items-center border-b pb-[10px]'>
                                        <div>Sunday</div>
                                        <div className='text-accent font-medium'>Emergency Only</div>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between items-center border-b pb-[10px]'>
                                        <div>Personal</div>
                                        <div className='text-accent font-medium'>7:00 Am - 9:00 Pm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div className='py-[30px] border-t'>
                    <div className=" flex container mx-auto text-center justify-between">
                        <div className='font-light text-base'>&copy; 2025 Insove - All right reserved</div>
                        <div className='font-light text-base'>Designed by: Noneedhere</div>
                    </div>
                </div>
            </footer>
            {/* end footer */}
        </div>

    )
}
export default DashboardPage
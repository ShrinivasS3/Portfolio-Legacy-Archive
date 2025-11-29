"use client"

import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const Education = () => {
    return (
    <section id='education' className='w-full'>
        <ContainerScroll
        titleComponent={
        <>
            <h1 className="font-lora font-normal text-4xl md:text-6xl heading text-dark dark:text-dark">
                My<br />
                <span className="text-5xl font-medium md:text-7xl font-lora text-secondary mt-1 leading-none">
                    Education
                </span>
            </h1>
            </>
        }>
            <div className='h-full flex flex-col w-full gap-4 font-medium justify-evenly'>
                {/* University - Current */}
                <div className='group relative p-4 rounded-2xl border-2 border-[#1B2B3B]/20 hover:border-accent/40 transition-all shadow-lg'>
                    <div className='flex flex-wrap justify-between items-center gap-4'>
                    <div className='space-y-1'>
                        <h3 className='text-lg md:text-2xl font-playfair font-bold text-primary'>SASTRA Deemed University</h3>
                        <p className='text-sm md:text-base text-dark font-inter'>B.Tech in Computer Science & Engineering (6th Semester)</p>
                        <p className='text-sm text-neutral-500 font-inter'>Exploring cutting-edge technologies and innovative solutions</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-lg md:text-xl font-semibold text-accent font-inter'>7.77 CGPA</p>
                        <p className='text-sm text-neutral-500 font-inter'>2021 - 2025</p>
                    </div>
                    </div>
                </div>
                {/* Class XII */}
                <div className='group relative p-4 rounded-2xl border-2 border-[#1B2B3B]/20 hover:border-accent/40 transition-all shadow-lg'>
                    <div className='flex flex-wrap justify-between items-center gap-4'>
                    <div className='space-y-1'>
                        <h3 className='text-lg md:text-2xl font-bold text-primary font-playfair'>Kamala Niketan Montessori School</h3>
                        <p className='text-sm md:text-base text-dark font-inter'>Higher Secondary (Class XII)</p>
                        <p className='text-sm text-neutral-500 font-inter'>Excelled in core subjects with distinction</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-lg md:text-xl font-semibold text-accent font-inter'>92%</p>
                        <p className='text-sm text-neutral-500 font-inter'>2021</p>
                    </div>
                    </div>
                </div>
                {/* Class X */}
                <div className='group relative p-4 rounded-2xl border-2 border-[#1B2B3B]/20 hover:border-accent/40 transition-all shadow-lg'>
                    <div className='flex flex-wrap justify-between items-center gap-4'>
                    <div className='space-y-1'>
                        <h3 className='text-lg md:text-2xl font-bold text-primary font-playfair'>R.S.K. Higher Secondary School</h3>
                        <p className='text-sm md:text-base text-dark font-inter'>Secondary Education (Class X)</p>
                        <p className='text-sm text-neutral-500 font-inter'>Built strong academic foundation</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-lg md:text-xl font-semibold text-accent font-inter'>92%</p>
                        <p className='text-sm text-neutral-500 font-inter'>2019</p>
                    </div>
                    </div>
                </div>
            </div>
        </ContainerScroll>
    </section>
    )
}

export default Education
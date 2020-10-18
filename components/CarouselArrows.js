import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'


const Arrow = styled.div`
		border-radius: 50%;
		height: 30px;
		width: 30px;
        background-color: rgba(0, 0, 0, 0.05);
		border: 2px solid white;
		position: absolute;
        top: 40%;
        cursor: pointer;
        ${props => props.dir === 'left' && `
        	right: 6px;
        `}
         ${props => props.dir === 'right' && `
        	left: 6px;
        `}
        :hover {
            background-color: rgb(245 238 232 / 50%);;
        }
	&::after {
		content: '';
		border: solid white;
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 3px;
		top: 8px;
		position: absolute;
        ${props => props.dir === 'left' && `
        	transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            right: 10px;
        `}
         ${props => props.dir === 'right' && `
        	transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            right: 9px;
        `}
	}
`

const CarouselArrows = ({children, order, onClick}) => {
    const [firstImgInView, setFirstImgInView] = useState(false)
    const [secondImgInView, setSecondImgInView] = useState(false)

    const observerRefFirst = useRef()
    const observerRefSecond = useRef()

	const createCallback = (setInView) => (entries, observer) => {
		entries.forEach(entry => {
			setInView(entry.isIntersecting)
		});
	};

	useEffect(() => {
		if(typeof window !== 'undefined' && observerRefFirst.current) {
			const observer = new window.IntersectionObserver(createCallback(setFirstImgInView), {threshold: [0.1]});
			observer.observe(observerRefFirst.current);
		}
	}, [observerRefFirst])

	useEffect(() => {
		if(typeof window !== 'undefined' && observerRefSecond.current) {
			const observer = new window.IntersectionObserver(createCallback(setSecondImgInView), {threshold: [0.1]});
			observer.observe(observerRefSecond.current);
		}
    }, [observerRefSecond])




    return (
        <>
        	<div style={{paddingRight: '1px'}} ref={observerRefFirst}></div>
                {children}
            <div style={{paddingRight: '1px'}} ref={observerRefSecond}></div>
            {!firstImgInView && <Arrow dir='right' order={order} onClick={() => onClick(-1)}></Arrow>}
            {!secondImgInView && <Arrow dir='left'order={order} onClick={() => onClick(1)}></Arrow>}
        </>
    )


}


export default CarouselArrows
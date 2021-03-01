import React, { useRef }  from 'react'
import styled from 'styled-components'
import CarouselArrows from './/CarouselArrows'

const ImageRowWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

const ImageDiv = styled.div`
	padding-right: 10px;
	display: flex;
    width: 100%;
	max-width: 1000px;
	scroll-behavior: smooth;
	margin: 0 auto;
    overflow-x: scroll;
    justify-content: start;
    flex-flow: row;
    img {
		padding-bottom: 12px;
		height: 400px;
		width: auto;
        margin-right: 10px;
        height: 250px;
        &:first-child {
            margin-right: 0px;
        }
        @media (max-width: 700px) {
            height: 250px;
        }
	}
`

const ImageCarouselManual = ({imageArray}) => {
	const scrollImageArray = useRef()

	const arrowClick = (direction) => {
        scrollImageArray.current.scrollBy(120*direction, 0);
    }

    return (
        <ImageRowWrapper>
            <ImageDiv ref={scrollImageArray}>
                <CarouselArrows onClick={arrowClick}>
                    {imageArray}
                </CarouselArrows>
            </ImageDiv>
        </ImageRowWrapper>
    )

}

export default ImageCarouselManual
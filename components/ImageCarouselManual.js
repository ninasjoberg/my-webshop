import React, { useRef }  from 'react'
import styled from 'styled-components'
import CarouselArrows from './/CarouselArrows'

const FirsImageRowWrapper = styled.div`
    position: relative;
`

const ImageDiv = styled.div`
	padding-right: 10px;
	display: flex;
	max-width: 100%;
	scroll-behavior: smooth;
	margin: 0 auto;
    overflow-x: scroll;
    width: 100vw;
    justify-content: start;
    cursor: pointer;
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
            height: 150px;
        }
	}
    ${({ style }) => style === 1 && `
		@media (min-width: 1200px) {
            justify-content: center;
        }
	`}
	${({ style }) => style === 3 && `
		flex-flow: row wrap;
		padding-right: 0px;
		margin-top: 10px;
		img {
			margin-right: 10px;
			height: 200px;
		}
		@media (max-width: 700px) {
			flex-flow: row;
			overflow-x: scroll;
			width: 100vw;
		}
	`}
`

const ImageCarouselManual = ({imageArray, order}) => {
	const scrollImageArray = useRef()

	const arrowClick = (direction) => {
        scrollImageArray.current.scrollBy(120*direction, 0);
	}

    console.log(imageArray)
    return (
        <FirsImageRowWrapper>
            <ImageDiv ref={scrollImageArray} style={order}>
                <CarouselArrows onClick={arrowClick}>
                    {imageArray}
                </CarouselArrows>
            </ImageDiv>
        </FirsImageRowWrapper>
    )

}

export default ImageCarouselManual
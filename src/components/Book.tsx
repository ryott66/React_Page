import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Book(): JSX.Element {


    return (
        // @ts-ignore
        <HTMLFlipBook
            width={400}
            height={560}
            size="fixed"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1536}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            showPageCorners={true}
            disableFlipByClick={false}
            style={{}} 
            className="book" >
            <div className="page"><img src="./images/book-image/first.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book1.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book2.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book3.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book4.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book5.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book6.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book7.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/book8.png" width={400} height={560} /></div>
            <div className="page"><img src="./images/book-image/last.png" width={400} height={560} /></div>
        </HTMLFlipBook>
    );
}

export default Book;


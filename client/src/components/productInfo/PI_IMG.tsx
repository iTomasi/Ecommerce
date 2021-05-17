import React, {useState} from "react";
import config from "../../config/config";
import "./scss/pi_img.scss";

interface IPI_IMGProps {
    imgs: string[]
}

const PI_IMG = ({imgs}: IPI_IMGProps) => {

    const [viewImage, setViewImage] = useState<number>(0);

    const handleCarouselScroll = (e: any) => {
        const divWidth = e.currentTarget.offsetWidth;
        const currentScroll = e.currentTarget.scrollLeft;

        const multiplyWidth = divWidth * (viewImage + 1);


        if (currentScroll === 0) setViewImage(0);
        else if (currentScroll === (divWidth * (imgs.length - 1))) setViewImage(imgs.length - 1);

        else if (multiplyWidth <= currentScroll) {
            setViewImage(viewImage + 1);
        }

        else if ((multiplyWidth - (divWidth * 2)) >= currentScroll) {
            setViewImage(viewImage - 1);
        }

    }

    return (
        <div className="pi_img">
            <h3>{viewImage + 1} / {imgs.length}</h3>
            <div className="carousel" onScroll={handleCarouselScroll}>
                {
                    imgs.map((img: any) => (
                        <img src={config.HOST.BACK_END + "/file?folder=products&file=" + img} alt="product"/>
                    ))
                }
            </div>
        </div>
    )
};

export default PI_IMG;
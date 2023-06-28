import "./style.css";
import React from 'react';


export interface UrbanBannerProps {
    text: string;
}

export const initialProps: UrbanBannerProps = {
    text: "Shop brand favorites, women's, men's, shoes, and apartment decor essentials on sale at"
}

const UrbanBanner = ({ text }: UrbanBannerProps) => {
    return (
        <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="overlap">
                  <img className="line" alt="Line" src="line-1.png" />
                  <img className="img" alt="Line" src="line-2.png" />
                </div>
                <h1 className="shop-brand-favorites">
                  <span className="text-wrapper">
                    {`${text}`}{" "}
                  </span>
                  <span className="span">Urban Outfitters</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default UrbanBanner;
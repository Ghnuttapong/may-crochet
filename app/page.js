"use client";
import GalleryComponent from "@/components/GalleryComponent";
import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";
import MenuButton from "@/components/MenuButton";
import "./globals.css";

import { Fragment, useEffect, useState } from "react";
import LoadingComponent from "@/components/Loading/LoadingComponent";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 600)
  }, []);

  return (
    <Fragment>
      {!isLoading ? (
        <Fragment>
          <HeroComponent />
          <MenuButton />
          <AboutComponent />
          <GalleryComponent />
        </Fragment>
      ) : (
        <LoadingComponent />
      )}

    </Fragment>
  );
}

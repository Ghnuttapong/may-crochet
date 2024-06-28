"use client";
import GalleryComponent from "@/components/GalleryComponent";
import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";
import MenuButton from "@/components/MenuButton";
import "./globals.css";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
        <HeroComponent />
        <MenuButton />
        <AboutComponent />
        <GalleryComponent />
    </Fragment>
  );
}

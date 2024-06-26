"use client";
import "./globals.css";
import HeroComponent from "@/components/HeroComponent";
import MenuButton from "@/components/MenuButton";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
        <HeroComponent />
        <MenuButton />
    </Fragment>
  );
}

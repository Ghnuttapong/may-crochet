"use client";
import "./globals.css";
import HeroComponent from "@/components/HeroComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { Button, Container, Group } from "@mantine/core";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
        <NavbarComponent />
        <HeroComponent />
    </Fragment>
  );
}

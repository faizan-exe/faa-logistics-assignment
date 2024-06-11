"use client";

import { useRef, useState } from "react";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Home() {
  const trackShipmentRef = useRef(null);
  const [shipmentDetails, setShipmentDetails] = useState([]);
  const [shipmentId, setShipmentId] = useState("");
  const [isShowShipment, setIsShowShipment] = useState(false);

  const getShipments = async () => {
    setIsShowShipment(true);
    try {
      const response = await fetch(`http://localhost:4000/api/shipment`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setShipmentDetails(data);
    } catch (error) {
      console.error("Failed to fetch shipment details:", error);
      return null;
    }
  };

  const onClickTrackShimpment = () => {
    if (trackShipmentRef.current) {
      trackShipmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen overflow-x-hidden">
      <div
        style={{
          backgroundImage: "url(/Image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen w-screen"
      >
        <Header onClickTrackShimpment={onClickTrackShimpment} />
        <div className="container mx-auto p-4 flex flex-col justify-center  text-white mt-[10%]">
          <p className="mt-4">Your Delivery partner</p>
          <h1 className="text-[52px] font-bold">
            Smooth Logistics with <br /> effective fixes
          </h1>
          <p>
            Steamlining supply chains with innoviative logistics expertise for
            seamless operations
          </p>
          <button
            onClick={onClickTrackShimpment}
            className="bg-[#0A84FF] hover:bg-[#5e7c9b] px-10 py-3 rounded-md flex items-center w-[230px] mt-10 justify-center"
          >
            Track My Shipment
          </button>
          <div className="flex items-center gap-10 justify-center w-full mt-[6%]">
            <p>Seamless logistics through efficient solutions</p>
            <div className="h-[100px] w-1 bg-[#0A84FF]" />
            <p>Efficient solutions For seamless transporation services</p>
          </div>
        </div>
      </div>
      <div
        ref={trackShipmentRef}
        className="bg-[#e7f3ff] rounded-md mx-[10%] p-10 mt-[10%] flex flex-col items-center !overflow-hidden"
      >
        <h2 className="text-[42px] font-bold text-center">
          Track Your Shipment
        </h2>
        <p className="text-[22px] text-center">
          Find and track your shipment effortlessly in real time
        </p>
        <div className="flex items-center justify-between border border-[#0A84FF] rounded-md mt-10">
          <input
            placeholder="Enter your Shipment ID"
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value)}
            className="bg-transparent  px-3 outline-none"
          />
          <button
            onClick={getShipments}
            className="bg-[#0A84FF] hover:bg-[#5e7c9b] py-3 rounded-md flex items-center xl:!w-[250px] justify-center text-[15px] text-white"
          >
            Track My Shipment
          </button>
        </div>
        {isShowShipment && (
          <>
            <h2 className="text-[30px] mt-10 font-bold">Shipment Details</h2>

            <div className="bg-white p-10 w-[80%] xl:w-[30%] rounded-xl border border-[#0A84FF] mt-5 font-bold text-black">
              <p>ID: {shipmentDetails.shipmentId}</p>
              <p>Status: {shipmentDetails.status}</p>
              <p>Origin: {shipmentDetails.origin}</p>
              <p>Destination: {shipmentDetails.destination}</p>
            </div>
          </>
        )}
      </div>
      <div className="bg-[#0A84FF] overflow-hidden  mt-[10%]">
        <div className="flex flex-col xl:flex-row justify-between px-20 pt-10 text-white">
          <Image
            src={"/white_logo.webp"}
            height={150}
            width={150}
            alt="logo"
            className="object-contain"
          />
          <div className="mt-10 xl:mt-0">
            <p>Home</p>
            <p>Track Your Shipment</p>
            <p>fas@logistics.co</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-20" />
        <p className="text-center text-white text-sm mt-3">
          Copyright all rights reserved 2024.
        </p>
      </div>
    </div>
  );
}

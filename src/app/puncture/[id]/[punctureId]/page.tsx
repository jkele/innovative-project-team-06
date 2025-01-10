"use client";

import { PunctureImages } from "@/components/puncture-images";
import { PunctureInfo } from "@/components/puncture-info";
import { Clipboard } from "@/icons/Clipboard";
import { Deadline } from "@/icons/Deadline";
import { Location } from "@/icons/Location";
import { Measurement } from "@/icons/Measurement";
import { People } from "@/icons/People";
import type { Puncture } from "@/types/puncture";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";
import wretch from "wretch";

export default function Puncture({
  params: { id, punctureId },
}: {
  params: { id: string; punctureId: string };
}) {
  const [puncture, setPuncture] = useState<Puncture>();

  useEffect(() => {
    const fetchPuncture = async () => {
      const response = await wretch(
        `https://localhost:7074/api/puncture/project?punctureId=${punctureId}`
      )
        .get()
        .json<Puncture>();

      setPuncture(response[0]);
    };

    fetchPuncture();
  }, [punctureId]);

  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex flex-col bg-[#F3FAFF]">
      <PunctureInfo projectId={Number(id)} puncture={puncture!} />
      <div className="flex flex-row self-center mt-6">
        <Image
          src={`data:image/jpg;base64,${puncture?.images}`}
          alt=""
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-4 mt-10 mx-auto">
        <div className="flex flex-row gap-6">
          <Measurement className="self-center" />
          <p className="self-center">Width</p>
          <p className="text-lg self-center">{puncture?.width} cm</p>
        </div>
        <div className="flex flex-row gap-6">
          <Measurement className="self-center" />
          <p className="self-center">Height</p>
          <p className="text-lg self-center">{puncture?.height} cm</p>
        </div>
        <div className="flex flex-row gap-6">
          <Measurement className="self-center" />
          <p className="self-center">Depth</p>
          <p className="text-lg self-center">{puncture?.depth} cm</p>
        </div>
        <div className="flex flex-row gap-6">
          <Clipboard className="self-center" />
          <p className="text-lg self-center">{puncture?.name}</p>
        </div>
        <div className="flex flex-row gap-6">
          <Deadline className="self-center" />
          <p className="text-lg self-center">deadline</p>
        </div>
        <div className="flex flex-row gap-6">
          <Location className="self-center" />
          <p className="text-lg self-center">{puncture?.location}</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Layout } from "@/app/lib/ui/Layout";
import { Pill } from "@/app/lib/ui/Pill";
import MDEditor from "@uiw/react-md-editor";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { slug: string } }) {
  const markdownText = "# Hello, *world* !";

  return (
    <Layout>
      <div className="mx-40 my-20">
        {/* <div>Page: {params.slug}</div> */}
        {/* <MDEditor.Markdown source={markdownText} /> */}
        <h1 className="font-bold text-[2rem] tracking-tight">
          Full Stack Developer
        </h1>
        <p className="font-bold text-[1.1rem]">Google</p>
        <p className="mb-3  ">3,00,000 INR - 8,00,000 INR</p>
        <div className="flex gap-2">
          <Pill className={"bg-brandMain text-white"}>Java</Pill>
          <Pill className={"bg-brandMain text-white"}>Java</Pill>
        </div>
      </div>
    </Layout>
  );
}

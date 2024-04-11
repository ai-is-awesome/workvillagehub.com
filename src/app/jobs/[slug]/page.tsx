"use client";
import useRequest from "@/app/lib/hooks/useRequest";
import { Layout } from "@/app/lib/ui/Layout";
import { Pill } from "@/app/lib/ui/Pill";
import { Button } from "@/app/lib/ui/buttonShad";
import { Loader } from "@/app/lib/ui/components/Loader";
import MDEditor from "@uiw/react-md-editor";
import { useEffect } from "react";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, error, isLoading, fetchData } = useRequest({
    url: "/api/jobs/getJobById",
    method: "post",
    data: { jobId: parseInt(params.slug) },
  });

  useEffect(() => {
    fetchData();
  }, []);
  const markdownText = `Description
-----------
  
  -   Train and evaluate NLP models, using both custom datasets and existing available language models, such as Spacy, CRF, LSTM, BERT and RoBERTA, LLM models etc.
  -   Update and improve models for NLP tasks, such as multi-label classification, sentiment analysis,NER and text summarization, and produce new models and solutions based on business requirements.
  -   Experience/Knowledge of deploying the applications on cloud servers.
  -   Information retrieval (with web scraping and parsing)
  -   Maintain and sanitize entries in the databases
  -   Write wrappers to connect backend with frontend UI
  
  Requirements
  ------------
  
  -   Advanced level knowledge of Python and understanding of good coding practices
  -   Comfortable with Linux
  -   Experience/Knowledge with MongoDB, vector databases and Flask
  -   Experience in NLP and machine learning libraries (e.g., spacy, transformers, Scikit Learn,
  -   TensorFlow, Hugging face ,pytorch ,Langchain)
  -   Knowledge of common methods in information extraction
  -   Experience with tools and methods for feature engineering
  -   Strong drive to learn and acquire missing skills
  -   Strong research and problem-solving skills
  -   Excellent communication (written, verbal) and teamwork skills`;

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <Layout>
        <div className="lg:mx-40 lg:my-20 mx-4 mt-4">
          {/* <div>Page: {params.slug}</div> */}
          <h1 className="font-bold lg:text-[2rem] text-[1.5rem] tracking-tight">
            {data.job.jobTitle}
          </h1>
          <p className="font-bold lg:text-[1.2rem]">
            {data.job.companyName.companyName}
          </p>
          <p className="mb-3  ">3,00,000 INR - 8,00,000 INR</p>
          <div className="flex gap-2 my-4">
            <Pill className={"bg-brandMain text-white"}>Java</Pill>
            <Pill className={"bg-brandMain text-white"}>Java</Pill>
          </div>
          <Button className="bg-brandMain">Apply Now</Button>
          <div className="mb-8"></div>
          {data && <MDEditor.Markdown source={data.job.jobDescription} />}
        </div>
      </Layout>
    );
  }
}

import { LeadsTable } from "@/app/leads/_components/leads_table";
import { Metadata } from "next";
import React from "react";
import axios from "axios";
import type { Lead } from "@/types";

const getLeads = async (): Promise<Lead[]> => {
  if (!process.env.MOCKAPI_URL) {
    throw new Error("MOCKAPI_URL is not defined");
  }
  const response = await axios.get(
    process.env.MOCKAPI_URL
  );
  const { data } = response;
  return data as Lead[];
};

export const metadata: Metadata = {
  title: "Leads",
  description: "List of leads",
};

export default async function LeadsPage() {
  const fetchedLeads = await getLeads();
  return <LeadsTable tableData={fetchedLeads} />;
}

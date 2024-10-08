import { z } from "zod";

export const jobSchema = z.object({
  jobTitle: z.string(),
  logoUrl: z.string().optional(),
  jobLink: z.string(),
  companyName: z.string().optional(),
  jobDescription: z.string().optional(),
  jobPostDate: z.date().optional(),
  jobTechnologies: z.array(z.number()).optional(),
});

export const locationSchema = z.object({
  countryName: z.string(),
  cityName: z.string().optional(),
  continentName: z.string().optional(),
});

export const jobQuerySchema = z.object({
  page: z.number(),
  limit: z.number(),
  search: z.string().optional(),
  location: locationSchema.optional(),
  technologies: z.array(z.number()).optional(),
});

export type jobSchemaType = z.infer<typeof jobSchema>;
